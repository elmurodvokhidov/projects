const panaromaImg = new PANOLENS.ImagePanorama("img/image1.jpeg");
const imgContainer = document.querySelector(".imgContainer");

const viewer = new PANOLENS.Viewer({
    container: imgContainer,
    autoRotate: true,
    autoRotateSpeed: .5
});

viewer.add(panaromaImg);