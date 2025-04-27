// Fungsi API GitHub

// Fungsi untuk mengambil data pengguna GitHub dan kontribusi
export async function fetchGitHubData(username: string) {
  try {
    // Prepare headers - only add authorization if token exists
    const headers: Record<string, string> = {};
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    // Fetch user data
    const userResponse = await fetch(`https://api.github.com/users/${username}`, { headers });
    
    if (!userResponse.ok) {
      throw new Error(`GitHub API error: ${userResponse.status}`);
    }
    
    const userData = await userResponse.json();
    
    // Fetch repositories with same authentication
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`, 
      { headers }
    );
    
    if (!reposResponse.ok) {
      throw new Error(`GitHub API error: ${reposResponse.status}`);
    }

    const reposData = await reposResponse.json()

    // Format data repositori
    const repositories = reposData.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      language: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      url: repo.html_url,
    }))

    // Untuk kontribusi, kita perlu menggunakan API GraphQL atau mensimulasikan data
    // Karena data grafik kontribusi GitHub memerlukan API GraphQL dengan autentikasi,
    // kita akan mensimulasikannya untuk contoh ini

    // Simulasi data kontribusi (dalam aplikasi nyata, Anda akan menggunakan API GraphQL GitHub)
    const contributionData = generateSimulatedContributionData()

    // Hitung statistik kontribusi
    const stats = calculateContributionStats(contributionData)

    return {
      username: userData.login,
      name: userData.name || "Alamsyah Adhim Nugraha",
      avatarUrl: userData.avatar_url,
      bio: userData.bio || "Pengembang Perangkat Lunak",
      followers: userData.followers,
      following: userData.following,
      contributions: stats,
      repositories,
      contributionData,
    }
  } catch (error) {
    console.error("Error fetching GitHub data:", error)
    // Kembalikan data default jika terjadi kesalahan
    return {
      username: username,
      name: "Alamsyah Adhim Nugraha",
      avatarUrl: "/placeholder.svg?height=200&width=200",
      bio: "Pengembang Perangkat Lunak",
      followers: 100,
      following: 50,
      contributions: {
        total: 100,
        thisWeek: 0,
        bestDay: 15,
        average: 0,
      },
      repositories: Array(4)
        .fill(0)
        .map((_, i) => ({
          id: i,
          name: `Proyek ${i + 1}`,
          description: "Deskripsi proyek keren",
          language: "JavaScript",
          stars: Math.floor(Math.random() * 100),
          forks: Math.floor(Math.random() * 20),
          url: "#",
        })),
      contributionData: generateSimulatedContributionData(),
    }
  }
}

// Menghasilkan data kontribusi simulasi (53 minggu x 7 hari)
function generateSimulatedContributionData() {
  const weeks = 53
  const days = 7

  return Array(weeks)
    .fill(0)
    .map(() => {
      return Array(days)
        .fill(0)
        .map(() => {
          // Angka acak antara 0-4 dengan probabilitas lebih tinggi untuk 0
          const rand = Math.random()
          if (rand < 0.6) return 0 // 60% kemungkinan 0
          if (rand < 0.8) return Math.floor(Math.random() * 3) + 1 // 20% kemungkinan 1-3
          return Math.floor(Math.random() * 10) + 1 // 20% kemungkinan 1-10
        })
    })
}

// Menghitung statistik kontribusi dari data grid
function calculateContributionStats(contributionData: number[][]) {
  let total = 0
  let bestDay = 0
  let thisWeek = 0
  let daysWithContributions = 0

  // Proses semua kontribusi
  contributionData.forEach((week, weekIndex) => {
    week.forEach((day, dayIndex) => {
      total += day

      if (day > bestDay) {
        bestDay = day
      }

      // Hitung hari dengan kontribusi
      if (day > 0) {
        daysWithContributions++
      }

      // Asumsikan minggu terakhir adalah minggu saat ini
      if (weekIndex === contributionData.length - 1) {
        thisWeek += day
      }
    })
  })

  // Hitung rata-rata (kontribusi per hari)
  const totalDays = contributionData.length * 7
  const average = totalDays > 0 ? Math.round((total / totalDays) * 10) / 10 : 0

  return {
    total,
    thisWeek,
    bestDay,
    average,
  }
}
