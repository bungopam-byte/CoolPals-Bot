const year = new Date().getFullYear();
document.documentElement.style.setProperty("--current-year", `"${year}"`);

const statStatus = document.querySelector('[data-stat="status"]');
if (statStatus) {
  statStatus.textContent = "Ready";
}

async function loadRelease() {
  try {
    const response = await fetch("assets/release.json", { cache: "no-store" });
    if (!response.ok) {
      return;
    }

    const release = await response.json();
    const title = document.querySelector('[data-release="title"]');
    const summary = document.querySelector('[data-release="summary"]');
    const footer = document.querySelector('[data-release="footer"]');

    if (title && release.title) {
      title.textContent = release.title;
    }
    if (summary && release.summary) {
      summary.textContent = release.summary;
    }
    if (footer && release.version) {
      footer.textContent = `CoolPals Bot ${release.version}`;
    }

    for (const [key, value] of Object.entries(release.cards || {})) {
      const card = document.querySelector(`[data-release-card="${key}"]`);
      if (card && value) {
        card.textContent = value;
      }
    }
  } catch {
    // Keep the static release copy when local file previews block fetch.
  }
}

loadRelease();
