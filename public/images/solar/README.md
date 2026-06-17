# SolEarth Energy — Solar Images Reference

All images are stored in `/public/images/solar/` and accessible via `/images/solar/<filename>` in the app.

| # | File Name | Topic | Size | Local Path | Unsplash Source |
|---|-----------|-------|------|------------|-----------------|
| 1 | `solar-01-residential-rooftop.jpg` | Residential rooftop solar panels | 188 KB | `/images/solar/solar-01-residential-rooftop.jpg` | https://unsplash.com/photos/solar-panels-on-roof-aI3EBLvcyu4 |
| 2 | `solar-02-commercial-farm.jpg` | Large commercial solar farm | 193 KB | `/images/solar/solar-02-commercial-farm.jpg` | https://unsplash.com/photos/aerial-view-of-solar-panels-XGAZzyLzn18 |
| 3 | `solar-03-installation-workers.jpg` | Solar panel installation team | 451 KB | `/images/solar/solar-03-installation-workers.jpg` | https://unsplash.com/photos/person-on-roof-installing-solar-panels-ppfzAn1r1KM |
| 4 | `solar-04-panel-closeup.jpg` | Close-up solar panel cells | 145 KB | `/images/solar/solar-04-panel-closeup.jpg` | https://unsplash.com/photos/blue-solar-panel-lot-XGAZzyLzn18 |
| 5 | `solar-05-battery-storage.jpg` | Battery energy storage system | 41 KB | `/images/solar/solar-05-battery-storage.jpg` | https://unsplash.com/photos/battery-storage-system |
| 6 | `solar-06-sunset-panels.jpg` | Solar panels at sunset/golden hour | 162 KB | `/images/solar/solar-06-sunset-panels.jpg` | https://unsplash.com/photos/solar-panels-at-sunset-T8Lte0oemEY |
| 7 | `solar-07-ground-array.jpg` | Ground-mounted solar array field | 53 KB | `/images/solar/solar-07-ground-array.jpg` | https://unsplash.com/photos/solar-panel-field-rez1MIqFXz8 |
| 8 | `solar-08-ev-charging.jpg` | EV electric vehicle charging | 118 KB | `/images/solar/solar-08-ev-charging.jpg` | https://unsplash.com/photos/electric-car-charging-IZOAOjvwhaM |
| 9 | `solar-09-smart-home.jpg` | Modern smart home exterior | 253 KB | `/images/solar/solar-09-smart-home.jpg` | https://unsplash.com/photos/modern-house-with-pool-qwtCeJ5cLYs |

## Usage in React / Vite

Since files are in `/public`, reference them directly with a root-relative path:

```tsx
// Option 1: Direct string path (recommended for public folder)
<img src="/images/solar/solar-01-residential-rooftop.jpg" alt="Residential Solar Panels" />

// Option 2: As a variable
const SOLAR_IMAGES = {
  residential:    '/images/solar/solar-01-residential-rooftop.jpg',
  commercialFarm: '/images/solar/solar-02-commercial-farm.jpg',
  installation:   '/images/solar/solar-03-installation-workers.jpg',
  panelCloseup:   '/images/solar/solar-04-panel-closeup.jpg',
  battery:        '/images/solar/solar-05-battery-storage.jpg',
  sunset:         '/images/solar/solar-06-sunset-panels.jpg',
  groundArray:    '/images/solar/solar-07-ground-array.jpg',
  evCharging:     '/images/solar/solar-08-ev-charging.jpg',
  smartHome:      '/images/solar/solar-09-smart-home.jpg',
}

// Option 3: As a background image
<div style={{ backgroundImage: "url('/images/solar/solar-06-sunset-panels.jpg')" }} />
```

## Direct Unsplash Download Links (1200px wide, high quality)

Copy and paste these URLs to download any image again:

1. **Residential Rooftop:** `https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=85&auto=format&fit=crop`
2. **Commercial Farm:** `https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=85&auto=format&fit=crop`
3. **Installation Workers:** `https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200&q=85&auto=format&fit=crop`
4. **Panel Close-up:** `https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=1200&q=85&auto=format&fit=crop`
5. **Battery Storage:** `https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1200&q=85&auto=format&fit=crop`
6. **Sunset Panels:** `https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=85&auto=format&fit=crop`
7. **Ground Array:** `https://images.unsplash.com/photo-1548705085-101177834f47?w=1200&q=85&auto=format&fit=crop`
8. **EV Charging:** `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85&auto=format&fit=crop`
9. **Smart Home:** `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85&auto=format&fit=crop`

> All images are from [Unsplash](https://unsplash.com) — free to use for commercial projects under the Unsplash License.
