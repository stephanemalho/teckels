import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const BASE_DIR = 'public/pages/nos-chiots';

const puppies = {
    blossom: {
        name: 'teckel-femelle-noire-feu-blossom',
        images: 2,
    },
    balthazar: {
        name: 'teckel-male-arlequin-balthazar',
        images: 5,
    },
    betty: {
        name: 'teckel-femelle-chocolat-tan-betty',
        images: 4,
    },
    bayron: {
        name: 'teckel-male-noire-feu-bayron',
        images: 4,
    },
    bloom: {
        name: 'teckel-male-noire-feu-bloom',
        images: 3,
    },
    rhaenyra: {
        name: 'teckel-femelle-arlequin-rhaenyra',
        images: 7,
    },
    brooklyn: {
        name: 'teckel-male-chocolat-tan-brooklyn',
        images: 3,
    },
};

async function optimizeImages() {
    for (const [puppy, config] of Object.entries(puppies)) {
        const puppyDir = path.join(BASE_DIR, puppy);
        console.log(`\nTraitement de ${puppy}...`);

        for (let i = 1; i <= config.images; i++) {
            const jpegFile = path.join(puppyDir, `${config.name}-${i}.jpeg`);
            const webpFile = path.join(puppyDir, `${config.name}-${i}.webp`);
            const thumbFile = path.join(puppyDir, `${config.name}-${i}-sm.webp`);

            try {
                // Créer WebP optimisé
                if (!fs.existsSync(webpFile)) {
                    console.log(`  Création WebP: ${config.name}-${i}.webp`);
                    await sharp(jpegFile)
                        .webp({ quality: 85 })
                        .toFile(webpFile);
                }

                // Créer WebP thumbnail
                if (!fs.existsSync(thumbFile)) {
                    console.log(`  Création thumbnail: ${config.name}-${i}-sm.webp`);
                    await sharp(jpegFile)
                        .resize(400, 400, { fit: 'cover', position: 'center' })
                        .webp({ quality: 80 })
                        .toFile(thumbFile);
                }
            } catch (error) {
                console.error(`  Erreur pour ${config.name}-${i}: ${error.message}`);
            }
        }

        console.log(`  ✓ ${puppy} traité`);
    }
}

optimizeImages().catch(console.error);
