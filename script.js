(async () => {
  await loadStarsPreset(tsParticles);
  const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  await tsParticles.load({
    id: "tsparticles",
    options: {
      background: {
        color: darkMode ? "#111111" : "#c9d1d9"
      },
      particles: {
        move: {
          enable: true,
          speed: 2,
        },
        color: darkMode ? "#4f851c" : "#221f81",
      },
      preset: "stars",
    },
  });
})();