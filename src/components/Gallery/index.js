import Slider from "react-slick";
import styled, { useTheme } from "styled-components";
const StyledSlider = styled(Slider)`
    overflow: hidden;
    .slick-dots {
        bottom: 0px;
        li {
            width: 12px;
            height: 5px;
            button {
                padding: 0;
                width: 12px;
                height: 5px;
                margin: 0;
                &:before {
                    opacity: 1;
                    width: 12px;
                    height: 5px;
                    border-radius: 5px;
                    content: "";
                    background-color: ${prop => prop.theme.colors.background2}
                }
            }
        }
        .slick-active {
            width: 36px;
            button {
                width: 36px;
                &:before {
                    width: 36px;
                }
            }
        }
    }
    .slick-list {
        padding: 36px 0;
        margin-right: -20px;
        .slick-slide div {
            margin-right: 10px;
        }
    }
`;
const Gallery = () => {
    const theme = useTheme();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        rows: 2,
        slidesToShow: 6,
        slidesToScroll: 6,
        pauseOnHover: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: parseInt(theme.screens.xl),
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                }
            },
            {
                breakpoint: parseInt(theme.screens.lg),
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: parseInt(theme.screens.md),
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: parseInt(theme.screens.sm),
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }
        ]
    };
    return (
        <section id="gallery" className="relative overflow-hidden bg-background1 py-14 sm:py-18 md:py-22">
            <StyledSlider {...settings}>
                {
                    Array(48)
                        .fill("/assets/gallery/gallery-img")
                        .map((_, index) => {
                            const url = `${_} (${index + 1}).jpeg`;
                            return (
                                <div key={url} >
                                    <img src={url} />
                                </div>
                            );
                        })
                }
            </StyledSlider>
        </section>
    );
};

export default Gallery;
