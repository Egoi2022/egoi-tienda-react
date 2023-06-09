import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Button
} from 'reactstrap';
// import styled from 'styled-components';
import "../../styles/banner.css";
import banner_resp from '../../assets/banner_responsive_1.png';
import banner_1 from '../../assets/banner_1.png';
import banner_2 from '../../assets/banner_2.png';
import celularCategoria from '../../assets/celularCategoria.png';
import arrow from '../../assets/arrow.png';
import TV from '../../assets/Full-HD-LED-TV-PNG-Image.png';
import mac from '../../assets/Macbook-No-Background-Clip-Art.png';
import ps5 from '../../assets/ps5.png';
import { getBanners } from '../../services/banners';
import { useEffect } from 'react';
import { allCategories, subcategorieById } from '../../services/categories';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { detailProductById } from '../../services/detailProduct';
import { getProductsByIdBrand } from '../../services/brands';

const Banner = (args) => {

    const history = useHistory();

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    /* Flujo de trabajo */
    const [bannersInfo, setBannersInfo] = useState([]);
    const [offset, setOffset] = useState([]);
    const [bannerFiltro1, setBannerFiltro1] = useState('');
    const [tipoFiltro, setTipoFiltro] = useState('');


    /* Banner 2 */
    const [tipoFiltro2, setTipoFiltro2] = useState('');
    const [bannerFiltro2, setBannerFiltro2] = useState('');


    const baseUrlImageBanners = "https://egoi.xyz/storage/app/public/banner/";

    const next = () => {
        if (animating) return;
        const filteredBanners = bannersInfo.filter((item) => item.banner_type === "banner_2");
        const nextIndex = activeIndex === filteredBanners.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }


    const previous = () => {
        if (animating) return;
        const filteredBanners = bannersInfo.filter((item) => item.banner_type === "banner_2");
        const nextIndex = activeIndex === 0 ? filteredBanners.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const getAllBanners = () => {
        getBanners()
            .then((res) => {
                console.log(res.data);
                console.log(res.data[0]);
                console.log(res.data[1]);
                console.log(res.data[2]);
                setBannersInfo(res.data);
                getAllCategoriesByBanner(res.data);
                // getInfoByBanner2(res.data);
            }).catch((err) => console.log(err));
    }

    // const getInfoByBanner2 = (bannersInfo) => {
    //     const filteredBanners2 = bannersInfo.filter((banner) => banner.banner_type === "banner_2");
    //     console.log("filtro 2 aplicado antes de mapeo para bnner 2", filteredBanners2);
    //     filteredBanners2.map((banner) => {
    //         banner.banner_data.map((bannerData) => {
    //             if (bannerData.tipo_filtro === 'category') {
    //                 console.log("filtro banner 2 categoria");
    //                 console.log(bannerData.id_filtro);
    //                 // console.log(bannerData.tipo_filtro);
    //                 setTipoFiltro2(bannerData.tipo_filtro);
    //                 setBannerFiltro2(bannerData.id_filtro);
    //                 subcategorieById(bannerData.id_filtro, offset)
    //                     .then((res) => {
    //                         console.log("Informacion de banner 2 category", res.data);
    //                     })
    //                     .catch((err) => console.log(err));
    //             }

    //             if (bannerData.tipo_filtro === 'product') {
    //                 console.log("filtro banner 2 producto");
    //                 console.log(bannerData.id_filtro);
    //                 // console.log(bannerData.tipo_filtro);
    //                 setTipoFiltro2(bannerData.tipo_filtro);
    //                 setBannerFiltro2(bannerData.id_filtro);
    //                 detailProductById(bannerData.id_filtro)
    //                     .then((res) => {
    //                         console.log("Detalle del producto del banner 2 product", res.data);
    //                     })
    //                     .catch((err) => console.log(err));
    //             }

    //             if (bannerData.tipo_filtro === 'brand') {
    //                 console.log("filtro banner 2 brand");
    //                 console.log(bannerData.id_filtro);
    //                 // console.log(bannerData.tipo_filtro);
    //                 setTipoFiltro2(bannerData.tipo_filtro);
    //                 setBannerFiltro2(bannerData.id_filtro);
    //                 getProductsByIdBrand(bannerData.id_filtro)
    //                     .then((res) => {
    //                         console.log('Detalle del producto por marca desde el banner 2', res.data);
    //                     })
    //                     .catch((err) => console.log(err));
    //             }

    //             if (bannerData.tipo_filtro === "shop") {
    //                 console.log("filtro banner 2 shop");
    //                 console.log(bannerData.id_filtro);
    //                 console.log(bannerData.tipo_filtro);
    //                 setTipoFiltro2(bannerData.tipo_filtro);
    //                 setBannerFiltro2(bannerData.id_filtro);

    //             }
    //         })
    //     })
    // }

    const getAllCategoriesByBanner = (bannersInfo) => {
        if (bannersInfo) {
            const filteredBanners = bannersInfo.filter((banner) => banner.banner_type === "banner_1");
            filteredBanners.map((banner) => {
                banner.banner_data.map((bannerData) => {
                    if (bannerData.tipo_filtro === "category") {
                        setTipoFiltro(bannerData.tipo_filtro);
                        setBannerFiltro1(bannerData.id_filtro);
                        subcategorieById(bannerData.id_filtro, offset)
                            .then((res) => {
                                console.log("Informacion de banner 1 category", res.data);
                                // setSubcategory(res.data.products);
                                // history.push(`/categories/products/filter/${bannerData.id_filtro}`);
                            })
                            .catch((err) => console.log(err));
                    }
                    if (bannerData.tipo_filtro === "product") {
                        setTipoFiltro(bannerData.tipo_filtro);
                        setBannerFiltro1(bannerData.id_filtro);
                        detailProductById(bannerData.id_filtro)
                            .then((res) => {
                                console.log('Detalle del producto del banner 1 product ', res.data);
                            })
                            .catch((err) => {
                                console.log(err);
                            })
                    }

                    if (bannerData.tipo_filtro === "brand") {
                        setTipoFiltro(bannerData.tipo_filtro);
                        setBannerFiltro1(bannerData.id_filtro);
                        getProductsByIdBrand(bannerData.id_filtro)
                            .then((res) => {
                                console.log('Detalle del producto por marca desde el banner 1', res.data);
                            })
                            .catch((err) => console.log(err));
                    }


                    if (bannerData.tipo_filtro === "shop") {
                        setTipoFiltro(bannerData.tipo_filtro);
                        setBannerFiltro1(bannerData.id_filtro);

                    }

                });
            });
        }

    };

    // const handleCarouselImageClick = (tipoFiltro2, bannerFiltro2) => {
    //     if (tipoFiltro === 'category') {
    //         history.push(`/categories/products/filter/${bannerFiltro1}`);
    //     } else if (tipoFiltro === 'product') {
    //         history.push(`/detailsProduct/${bannerFiltro1}/slug`);
    //     } else if (tipoFiltro === 'brand') {
    //         history.push(`/brand/filterBrandBanner/${bannerFiltro1}`);
    //     } else if (tipoFiltro === 'shop') {
    //         // Acción para el filtro de "shop"
    //     }
    // };


    const showProductsByCategoryBanner = () => {
        if (tipoFiltro === 'category') {
            history.push(`/categories/products/filter/${bannerFiltro1}`);
        }
        if (tipoFiltro === 'product') {
            history.push(`/detailsProduct/${bannerFiltro1}/slug`);
        }
        if (tipoFiltro === 'brand') {
            history.push(`/brand/filterBrandBanner/${bannerFiltro1}`);
        }

        // /* Banner 2 */
        // if (tipoFiltro2 === 'category') {
        //     history.push(`/categories/products/filter/${bannerFiltro2}`);
        // }
        // if (tipoFiltro2 === 'product') {
        //     history.push(`/detailsProduct/${bannerFiltro2}/slug`);
        // }
        // if (tipoFiltro2 === 'brand') {
        //     history.push(`/brand/filterBrandBanner/${bannerFiltro2}`);
        // }
    }

    const showRutes = (itemId, filtro) => {
        console.log("este el id elegido para pasar por rutas", itemId);
        

        if (filtro === 'category') {
            history.push(`/categories/products/filter/${itemId}`);
        }
        if (filtro === 'product') {
            history.push(`/detailsProduct/${itemId}/slug`);
        }
        if (filtro === 'brand') {
            history.push(`/brand/filterBrandBanner/${itemId}`);
        }

    }

    useEffect(() => {
        getAllBanners();

        if (bannersInfo) {
            console.log(bannersInfo);

        }
        if (bannerFiltro1) {
            console.log("Banner filtro 1", bannerFiltro1);
        }

        if (bannerFiltro2) {
            console.log("banner Filtro 2", bannerFiltro2);
        }

    }, [bannerFiltro1, bannerFiltro2, tipoFiltro2]);

    return (
        <>
            <div className='container'>
                <div className='containerBanner'>

                    {bannersInfo &&
                        bannersInfo
                            .filter((banner) => banner.banner_type === "banner_1")
                            .map((banner, index) => (
                                <div key={index}>
                                    <a href='#' onClick={() => showProductsByCategoryBanner()}>
                                        <img src={baseUrlImageBanners + banner.banner_data[0].imagen} width={'100%'} height={'124px'} className='banner_1' />
                                    </a>
                                    <a href='#' onClick={() => showProductsByCategoryBanner()}>
                                        <img src={baseUrlImageBanners + banner.banner_data[0].imagen} width={'100%'} height={'124px'} className='banner_res_2' />
                                    </a>
                                </div>
                            ))}

                    {bannersInfo &&
                        bannersInfo
                            .filter((banner) => banner.banner_type === "banner_2")
                            .map((itemBanner, index) => (
                                <div id={`carouselExampleAutoplaying-${index}`} className="carousel slide" key={index} data-bs-ride="carousel" data-bs-interval="3000">
                                    <div className="carousel-indicators">
                                        {itemBanner.banner_data.map((_, i) => (
                                            <button
                                                type="button"
                                                data-bs-target={`#carouselExampleAutoplaying-${index}`}
                                                data-bs-slide-to={i}
                                                className={i === 0 ? "active" : ""}
                                                key={i}
                                                aria-label={`Slide ${i + 1}`}
                                            ></button>
                                        ))}
                                    </div>

                                    <div className="carousel-inner">
                                        {itemBanner.banner_data.map((item, i) => (
                                            <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={i}>
                                                <a href='#' onClick={() => showRutes(item.id_filtro, item.tipo_filtro)}>
                                                    <img src={baseUrlImageBanners + item.imagen} className="d-block w-100" alt="..." />
                                                </a>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleAutoplaying-${index}`} data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleAutoplaying-${index}`} data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            ))}
                </div >
                <div className='containerCategoriasBanner'>
                    <a href='#' className='categoriaCards1'>
                        <div className='Categoriaimg'>
                            <img
                                src={celularCategoria}
                                width={'80px'}
                            />

                        </div>
                        <div className='span_flecha'>
                            <p className='textCategoria'>
                                Celulares y Accesorios
                            </p>
                            <i><img src={arrow} width={'4px'} /></i>
                        </div>
                    </a>

                    <a href='#' className='categoriaCards'>
                        <div className='Categoriaimg'>
                            <img
                                src={TV}
                                width={'80px'}
                            />

                        </div>
                        <div className='span_flecha'>
                            <p className='textCategoria'>
                                TV Audio y Video
                            </p>
                            <i><img src={arrow} width={'4px'} /></i>
                        </div>
                    </a>

                    <a href='#' className='categoriaCards'>
                        <div className='Categoriaimg'>
                            <img
                                src={mac}
                                width={'80px'}
                            />

                        </div>
                        <div className='span_flecha'>
                            <p className='textCategoria'>
                                Computación
                            </p>
                            <i><img src={arrow} width={'4px'} /></i>
                        </div>
                    </a>

                    <a href='#' className='categoriaCards'>
                        <div className='Categoriaimg'>
                            <img
                                src={ps5}
                                width={'50px'}
                                style={{}}
                            />

                        </div>
                        <div className='span_flecha'>
                            <p className='textCategoria'>
                                Consolas y videojuegos
                            </p>
                            <i><img src={arrow} width={'4px'} /></i>
                        </div>
                    </a>
                </div>
            </div>

        </>
    );
}

export default Banner;

