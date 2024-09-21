export function setButtonText(
  btn,
  isLoading,
  defaultText = "Save",
  loadingText = "Saving..."
) {
  isLoading ? (btn.textContent = loadingText) : (btn.textContent = defaultText);
}
