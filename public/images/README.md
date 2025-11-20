# Images Directory

This directory contains all photos and images used on the Switchback Solutions website.

## Directory Structure

- `hero/` - Hero section and landing page images
- `work/` - Project showcases and case study images
- `team/` - Team photos and headshots
- `misc/` - Other site images (icons, backgrounds, etc.)

## Usage in Astro

Images in the `public` directory are served from the root of your site. Reference them like this:

```astro
<!-- In an Astro component -->
<img src="/images/hero/landscape.jpg" alt="Description" />
```

## Image Optimization Tips

- Use modern formats (WebP, AVIF) when possible
- Optimize images before uploading (use tools like ImageOptim, Squoosh, or similar)
- Consider responsive images with `srcset` for different screen sizes
- Keep file sizes reasonable for web use


