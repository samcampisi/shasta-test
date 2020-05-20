import ImagePicker, { Image } from 'react-native-image-crop-picker';

export function openCamera() {
  return new Promise((resolve, reject) => {
    ImagePicker.openCamera({
      width: 200,
      height: 200,
      cropping: true,
    })
      .then((image: Image | Image[]) => {
        resolve(image as Image);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
}

export function openPicker(): Promise<Image> {
  return new Promise((resolve, reject) => {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
    })
      .then((image: Image | Image[]) => {
        resolve(image as Image);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
}

module.exports = {
  openCamera,
  openPicker,
};
