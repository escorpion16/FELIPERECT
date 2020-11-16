const profiles =[
    {
        id:1,
        profile:"NVIDIA GeForce",
        profileImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZmnEWwyCoWqRZlwcORH4BqEXr-uyPF6UGuw&usqp=CAU",
        username:"@nvidia"
    },
    {
        id:2,
        profile:"AMD Ryzen",
        profileImg:"https://allvectorlogo.com/img/2017/07/amd-ryzen-5-logo.png",
        username:"@Ryzen"

    }, {
        id:3,
        profile:"Nintendo",
        profileImg:"https://as.com/meristation/imagenes/2020/01/27/noticias/1580103553_990984_1580103753_noticia_normal.jpg",
        username:"@Nintendo"},
        {
        id:4,
        profile:"Sony",
        profileImg:"https://static.ofertia.com.co/comercios/sony/profile-156209.v22.png",
        username:"@ Sony"},
        {
        id:5,
        profile:"Microsoft",
        profileImg:"https://turbologo.com/articles/wp-content/uploads/2019/08/microsoft-logo-1987.png.webp",
        username:"@Microsoft®"},
        {
        id:6,
        profile:"Fc Barcelona",
        profileImg:"https://img.icons8.com/color/452/barcelona-fc.png",
        username:"@Barza"},
        {
        id:7,
        profile:"Readl Madrid",
        profileImg:"data:image/png;base64,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",
        username:"@Real Madrid C.F."},
        {
        id:8,
        profile:"Youtube",
        profileImg:"https://img1.pnghut.com/11/6/21/ucFZMBV0E1/4k-resolution-post-apple-icon-image-format-symbol-red.jpg",
        username:"@Youtube®"},
]
export {
    profiles
}