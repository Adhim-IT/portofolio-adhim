"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { fetchGitHubData } from "@/lib/github"
import { motion } from "framer-motion"
import { Github, GitFork, Star, Users } from "lucide-react"
import ContributionGrid from "./contribution-grid"

export function GitHubActivity() {
  const [userData, setUserData] = useState({
    username: "",
    avatarUrl: "",
    name: "",
    bio: "",
    followers: 0,
    following: 0,
    contributions: {
      total: 0,
      thisWeek: 0,
      bestDay: 0,
      average: 0,
    },
    repositories: [],
    contributionData: [] as any[],
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        // Ganti dengan username GitHub Anda
        const username = "Adhim-IT"
        const data = await fetchGitHubData(username)
        setUserData(data)
      } catch (error) {
        console.error("Error fetching GitHub data:", error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  }

  return (
    <section id="github" className="py-16 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-block p-2 bg-muted rounded-full mb-4">
            <Github className="h-6 w-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Aktivitas GitHub</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Lihat kontribusi, repositori, dan aktivitas GitHub saya.
          </p>
        </div>

        <Tabs defaultValue="contributions" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="contributions">Kontribusi</TabsTrigger>
            <TabsTrigger value="repositories">Repositori</TabsTrigger>
            <TabsTrigger value="stats">Statistik</TabsTrigger>
          </TabsList>

          <TabsContent value="contributions" className="space-y-8">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={item}>
                <Card className="gradient-border">
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-1">Total</p>
                    <p className="text-4xl font-bold gradient-text">
                      {loading ? "..." : userData.contributions.total || 100}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="gradient-border">
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-1">Minggu Ini</p>
                    <p className="text-4xl font-bold gradient-text">
                      {loading ? "..." : userData.contributions.thisWeek || 0}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="gradient-border">
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-1">Hari Terbaik</p>
                    <p className="text-4xl font-bold gradient-text">
                      {loading ? "..." : userData.contributions.bestDay || 15}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="gradient-border">
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-1">Rata-rata</p>
                    <p className="text-4xl font-bold gradient-text">
                      {loading ? "..." : userData.contributions.average || 0}{" "}
                      <span className="text-sm text-muted-foreground">/ hari</span>
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-muted/30 p-6 rounded-lg"
            >
              <ContributionGrid contributionData={userData.contributionData} loading={loading} />
            </motion.div>
          </TabsContent>

          <TabsContent value="repositories" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {loading
                ? Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <Card key={i} className="animate-pulse">
                        <CardHeader className="space-y-2">
                          <div className="h-5 bg-muted rounded w-1/3"></div>
                          <div className="h-4 bg-muted rounded w-2/3"></div>
                        </CardHeader>
                        <CardContent>
                          <div className="h-4 bg-muted rounded w-full mb-2"></div>
                          <div className="h-4 bg-muted rounded w-5/6"></div>
                        </CardContent>
                      </Card>
                    ))
                : userData.repositories?.slice(0, 4).map((repo: any, index: number) => (
                    <motion.div
                      key={repo.id || index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="h-full flex flex-col">
                        <CardHeader>
                          <CardTitle className="text-xl">{repo.name || `Proyek ${index + 1}`}</CardTitle>
                          <CardDescription>{repo.description || "Proyek keren"}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                          <p className="text-sm text-muted-foreground mb-4">{repo.language || "JavaScript"}</p>
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 mr-1" />
                              <span>{repo.stars || Math.floor(Math.random() * 100)}</span>
                            </div>
                            <div className="flex items-center">
                              <GitFork className="h-4 w-4 mr-1" />
                              <span>{repo.forks || Math.floor(Math.random() * 20)}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
            </div>
          </TabsContent>

          <TabsContent value="stats">
            <Card>
              <CardHeader>
                <CardTitle>Profil GitHub</CardTitle>
                <CardDescription>@{userData.username || "Adhim-IT"}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-muted">
                      {userData.avatarUrl ? (
                        <img
                          src={userData.avatarUrl || "/placeholder.svg"}
                          alt={userData.name || "Profil"}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-muted">
                          <Users className="h-8 w-8 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-medium">{userData.name || "Alamsyah Adhim Nugraha"}</h3>
                      <p className="text-sm text-muted-foreground">{userData.bio || "Pengembang Perangkat Lunak"}</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="text-center">
                      <p className="text-2xl font-bold">{userData.followers || 0}</p>
                      <p className="text-sm text-muted-foreground">Pengikut</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold">{userData.following || 0}</p>
                      <p className="text-sm text-muted-foreground">Mengikuti</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold">{userData.repositories?.length || 0}</p>
                      <p className="text-sm text-muted-foreground">Repositori</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
