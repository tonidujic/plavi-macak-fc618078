

## Plan: Replace Instagram Embed with Self-Hosted Video

### What
Replace the Instagram iframe embed in the "Grupni treninzi" section with a self-hosted `<video>` element, while keeping the current Instagram-style window frame (rounded corners, gradient border, shadow).

### Prerequisites
You need to send me the video file so I can add it to the project assets.

### Changes

**1. Add video asset**
- Copy the uploaded video file to `public/` (e.g., `public/grupni-treninzi.mp4`) since video files are typically too large for bundling via `src/assets/`.

**2. Modify `src/pages/Index.tsx` (lines 151-162)**
- Replace the `<iframe>` with a `<video>` element:
  - Keep the wrapper `<div>` with `mx-auto max-w-md rounded-xl overflow-hidden shadow-warm gradient-border`
  - Add an Instagram-style header bar inside the wrapper (profile icon, username text, dots menu) to preserve the Instagram window look
  - Use `<video>` with `controls`, `playsInline`, `preload="metadata"`, and optionally a `poster` image
  - Set `width="100%"` and appropriate styling to match the current 600px height feel

### Result
Users will be able to play the video directly on the page without leaving to Instagram, while the visual frame retains the Instagram-window aesthetic.

