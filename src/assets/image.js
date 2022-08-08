export const images = {};

const files = import.meta.glob('./image/*.*g', { eager: true });
for (const key of Object.keys(files)) {
    images[key] = files[key].default;
}
