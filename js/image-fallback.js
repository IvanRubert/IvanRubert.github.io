const profileImage = document.querySelector("[data-fallback-src]");

if (profileImage) {
  const useFallbackImage = () => {
    profileImage.removeEventListener("error", useFallbackImage);
    profileImage.src = profileImage.dataset.fallbackSrc;
  };

  profileImage.addEventListener("error", useFallbackImage);

  if (profileImage.complete && profileImage.naturalWidth === 0) {
    useFallbackImage();
  }
}
