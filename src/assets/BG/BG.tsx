interface LandingHeroImageProps {
    src: string;
    alt: string;
}

export const LandingHeroBG: React.FC<LandingHeroImageProps> = ({
    src,
    alt,
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1328 868"
            fill="none"
            preserveAspectRatio="none"
            height="auto"
            width="100%"
        >
            <path
                d="M936 80C913.909 80 896 62.0914 896 40V32C896 14.3269 881.673 0 864 0H633C615.327 0 601 14.3269 601 32V40C601 62.0914 583.091 80 561 80H32C14.3269 80 0 94.3269 0 112V756C0 773.673 14.3269 788 32 788H296C318.091 788 336 805.909 336 828V836C336 853.673 350.327 868 368 868H1296C1313.67 868 1328 853.673 1328 836V112C1328 94.3269 1313.67 80 1296 80H936Z"
                fill="url(#pattern0_464_19820)"
            />
            <defs>
                <pattern
                    id="pattern0_464_19820"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use
                        xlinkHref="#image0_464_19820"
                        transform="matrix(0.000422667 0 0 0.00064666 -0.0753677 -0.215332)"
                    />
                </pattern>
                <image
                    id="image0_464_19820"
                    width="4096"
                    height="2134"
                    preserveAspectRatio="xMaxYMin slice"
                    xlinkHref={src}
                />
            </defs>
        </svg>
    );
};

export const LandingHeroMobileBG: React.FC<LandingHeroImageProps> = ({
    src,
    alt,
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 359 620"
            fill="none"
            preserveAspectRatio="none"
            height="auto"
            width="100%"
        >
            <path
                d="M319 64C301.327 64 287 49.6731 287 32V24C287 10.7452 276.255 0 263 0H181C167.745 0 157 10.7452 157 24V32C157 45.2548 146.255 56 133 56H24C10.7452 56 0 66.7452 0 80V596C0 609.255 10.7452 620 24 620H335C348.255 620 359 609.255 359 596V88C359 74.7452 348.255 64 335 64H319Z"
                fill="url(#pattern0_464_20149)"
            />
            <defs>
                <pattern
                    id="pattern0_464_20149"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use
                        xlinkHref="#image0_464_20149"
                        transform="matrix(0.000989419 0 0 0.000572906 -0.217139 -0.0870968)"
                    />
                </pattern>
                <image
                    id="image0_464_20149"
                    width="4096"
                    height="2134"
                    preserveAspectRatio="xMaxYMin slice"
                    xlinkHref={src}
                />
            </defs>
        </svg>
    );
};

export const WhyGoldXBG: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="auto"
        viewBox="0 0 442 344"
        fill="none"
        preserveAspectRatio="none"
    >
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M442 32C442 14.3269 427.673 0 410 0H32C14.3269 0 0 14.3269 0 32V312C0 329.673 14.3269 344 32 344H318C335.673 344 350 329.673 350 312V300C350 273.49 371.49 252 398 252H410C427.673 252 442 237.673 442 220V32Z"
            fill="#111111"
        />
    </svg>
);

export const GoldXFeaturesBG: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="auto"
        viewBox="0 0 1408 1064"
        fill="none"
    >
        <g filter="url(#filter0_b_5115_8538)">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 88C0 70.3269 14.3269 56 32 56H703.431C714.04 56 724.214 51.7857 731.716 44.2843L764.284 11.7157C771.786 4.21426 781.96 0 792.569 0H1376C1393.67 0 1408 14.3269 1408 32V96V968V976C1408 993.673 1393.67 1008 1376 1008H704.569C693.96 1008 683.786 1012.21 676.284 1019.72L643.716 1052.28C636.214 1059.79 626.04 1064 615.431 1064H32C14.3269 1064 0 1049.67 0 1032V968V96V88Z"
                fill="#171615"
                // fill-opacity="0.8"
            />
        </g>
        <defs>
            <filter
                id="filter0_b_5115_8538"
                x="-320"
                y="-320"
                width="2048"
                height="1704"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="160" />
                <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_5115_8538"
                />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_5115_8538"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
);

export const GoldXFeaturesBottomBG: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 940.576 1408 127.67999999999999"
        width="100%"
        height="auto"
    >
        <g filter="url(#filter0_b_464_19916)">
            <path
                // fill-opacity="0.8"
                fill="#171615"
                d="M0 88C0 70.3269 14.3269 56 32 56H703.431C714.04 56 724.214 51.7857 731.716 44.2843L764.284 11.7157C771.786 4.21426 781.96 0 792.569 0H1376C1393.67 0 1408 14.3269 1408 32V96V968V976C1408 993.673 1393.67 1008 1376 1008H704.569C693.96 1008 683.786 1012.21 676.284 1019.72L643.716 1052.28C636.214 1059.79 626.04 1064 615.431 1064H32C14.3269 1064 0 1049.67 0 1032V968V96V88Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
            />
        </g>
        <defs>
            <filter
                color-interpolation-filters="sRGB"
                filterUnits="userSpaceOnUse"
                height="1704"
                width="2048"
                y="-320"
                x="-320"
                id="filter0_b_464_19916"
            >
                <feFlood result="BackgroundImageFix" flood-opacity="0" />
                <feGaussianBlur stdDeviation="160" in="BackgroundImageFix" />
                <feComposite
                    result="effect1_backgroundBlur_464_19916"
                    operator="in"
                    in2="SourceAlpha"
                />
                <feBlend
                    result="shape"
                    in2="effect1_backgroundBlur_464_19916"
                    in="SourceGraphic"
                    mode="normal"
                />
            </filter>
        </defs>
    </svg>
);
export const GoldXFeaturesMBBottomBG: React.FC = () => (
    <svg
        fill="none"
        viewBox="0 1124.24 377.38853503184714 74.152"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="auto"
    >
        <g filter="url(#filter0_b_5472_9486)">
            <path
                fill-opacity="1"
                fill="#171615"
                d="M0 56C0 42.7452 10.7452 32 24 32H189.311C195.629 32 201.805 30.13 207.062 26.6256L238.938 5.37439C244.195 1.87001 250.371 0 256.689 0H351C364.255 0 375 10.7452 375 24V64V1132V1140C375 1153.25 364.255 1164 351 1164H185.689C179.371 1164 173.195 1165.87 167.938 1169.37L136.062 1190.63C130.805 1194.13 124.629 1196 118.311 1196H24C10.7452 1196 0 1185.25 0 1172V1132V64V56Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
            />
        </g>
        <defs>
            <filter
                color-interpolation-filters="sRGB"
                filterUnits="userSpaceOnUse"
                height="1836"
                width="1015"
                y="-320"
                x="-320"
                id="filter0_b_5472_9486"
            >
                <feFlood result="BackgroundImageFix" flood-opacity="0" />
                <feGaussianBlur stdDeviation="160" in="BackgroundImageFix" />
                <feComposite
                    result="effect1_backgroundBlur_5472_9486"
                    operator="in"
                    in2="SourceAlpha"
                />
                <feBlend
                    result="shape"
                    in2="effect1_backgroundBlur_5472_9486"
                    in="SourceGraphic"
                    mode="normal"
                />
            </filter>
        </defs>
    </svg>
);

export const GoldXFeaturesTopBG: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 1408 117.04"
        width="100%"
        height="auto"
    >
        <g filter="url(#filter0_b_464_19916)">
            <path
                // fill-opacity="0.8"
                fill="#171615"
                d="M0 88C0 70.3269 14.3269 56 32 56H703.431C714.04 56 724.214 51.7857 731.716 44.2843L764.284 11.7157C771.786 4.21426 781.96 0 792.569 0H1376C1393.67 0 1408 14.3269 1408 32V96V968V976C1408 993.673 1393.67 1008 1376 1008H704.569C693.96 1008 683.786 1012.21 676.284 1019.72L643.716 1052.28C636.214 1059.79 626.04 1064 615.431 1064H32C14.3269 1064 0 1049.67 0 1032V968V96V88Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
            />
        </g>
        <defs>
            <filter
                color-interpolation-filters="sRGB"
                filterUnits="userSpaceOnUse"
                height="1704"
                width="2048"
                y="-320"
                x="-320"
                id="filter0_b_464_19916"
            >
                <feFlood result="BackgroundImageFix" flood-opacity="0" />
                <feGaussianBlur stdDeviation="160" in="BackgroundImageFix" />
                <feComposite
                    result="effect1_backgroundBlur_464_19916"
                    operator="in"
                    in2="SourceAlpha"
                />
                <feBlend
                    result="shape"
                    in2="effect1_backgroundBlur_464_19916"
                    in="SourceGraphic"
                    mode="normal"
                />
            </filter>
        </defs>
    </svg>
);
export const GoldXFeaturesMBTopBG: React.FC = () => (
    <svg
        fill="none"
        viewBox="0 0 375 62.192"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="auto"
    >
        <g filter="url(#filter0_b_5472_9486)">
            <path
                fill="#171615"
                d="M0 56C0 42.7452 10.7452 32 24 32H189.311C195.629 32 201.805 30.13 207.062 26.6256L238.938 5.37439C244.195 1.87001 250.371 0 256.689 0H351C364.255 0 375 10.7452 375 24V64V1132V1140C375 1153.25 364.255 1164 351 1164H185.689C179.371 1164 173.195 1165.87 167.938 1169.37L136.062 1190.63C130.805 1194.13 124.629 1196 118.311 1196H24C10.7452 1196 0 1185.25 0 1172V1132V64V56Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
            />
        </g>
        <defs>
            <filter
                color-interpolation-filters="sRGB"
                filterUnits="userSpaceOnUse"
                height="1836"
                width="1015"
                y="-320"
                x="-320"
                id="filter0_b_5472_9486"
            >
                <feFlood result="BackgroundImageFix" flood-opacity="0" />
                <feGaussianBlur stdDeviation="160" in="BackgroundImageFix" />
                <feComposite
                    result="effect1_backgroundBlur_5472_9486"
                    operator="in"
                    in2="SourceAlpha"
                />
                <feBlend
                    result="shape"
                    in2="effect1_backgroundBlur_5472_9486"
                    in="SourceGraphic"
                    mode="normal"
                />
            </filter>
        </defs>
    </svg>
);

export const ProductCardBG: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="416"
        height="344"
        viewBox="0 0 416 344"
        fill="none"
    >
        <g filter="url(#filter0_b_5115_12609)">
            <mask id="path-1-inside-1_5115_12609" fill="white">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M416 32C416 14.3269 401.673 0 384 0H32C14.3269 0 0 14.3269 0 32V312C0 329.673 14.3269 344 32 344H292C309.673 344 324 329.673 324 312V300C324 273.49 345.49 252 372 252H384C401.673 252 416 237.673 416 220V32Z"
                />
            </mask>
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M416 32C416 14.3269 401.673 0 384 0H32C14.3269 0 0 14.3269 0 32V312C0 329.673 14.3269 344 32 344H292C309.673 344 324 329.673 324 312V300C324 273.49 345.49 252 372 252H384C401.673 252 416 237.673 416 220V32Z"
                fill="#201F1E"
                // fill-opacity="0.04"
            />
            {/* <path
                d="M32 1H384V-1H32V1ZM1 312V32H-1V312H1ZM292 343H32V345H292V343ZM325 312V300H323V312H325ZM325 300C325 274.043 346.043 253 372 253V251C344.938 251 323 272.938 323 300H325ZM372 253H384V251H372V253ZM415 32V220H417V32H415ZM292 345C310.225 345 325 330.225 325 312H323C323 329.121 309.121 343 292 343V345ZM-1 312C-1 330.225 13.7746 345 32 345V343C14.8792 343 1 329.121 1 312H-1ZM384 253C402.225 253 417 238.225 417 220H415C415 237.121 401.121 251 384 251V253ZM384 1C401.121 1 415 14.8792 415 32H417C417 13.7746 402.225 -1 384 -1V1ZM32 -1C13.7746 -1 -1 13.7746 -1 32H1C1 14.8792 14.8792 1 32 1V-1Z"
                fill="url(#paint0_linear_5115_12609)"
                mask="url(#path-1-inside-1_5115_12609)"
            /> */}
        </g>
        <defs>
            <filter
                id="filter0_b_5115_12609"
                x="-64"
                y="-64"
                width="544"
                height="472"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="32" />
                <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_5115_12609"
                />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_5115_12609"
                    result="shape"
                />
            </filter>
            <linearGradient
                id="paint0_linear_5115_12609"
                x1="416"
                y1="344"
                x2="-30.692"
                y2="-108.785"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="white" stop-opacity="0.2" />
                <stop offset="1" stop-color="white" stop-opacity="0.04" />
            </linearGradient>
        </defs>
    </svg>
);
export const ProtectKeyCardBG: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 424 498"
        fill="none"
        // preserveAspectRatio="xMaxYMin"
    >
        <g filter="url(#filter0_b_464_22928)">
            <path
                d="M32 0C14.3269 0 0 14.3269 0 32V466C0 483.673 14.3269 498 32 498H299C316.673 498 331 483.673 331 466V446C331 423.909 348.909 406 371 406H392C409.673 406 424 391.673 424 374V32C424 14.3269 409.673 0 392 0H32Z"
                fill="white"
                fill-opacity="0.04"
            />
            <path
                d="M32 0C14.3269 0 0 14.3269 0 32V466C0 483.673 14.3269 498 32 498H299C316.673 498 331 483.673 331 466V446C331 423.909 348.909 406 371 406H392C409.673 406 424 391.673 424 374V32C424 14.3269 409.673 0 392 0H32Z"
                fill="url(#paint0_radial_464_22928)"
            />
            <path
                d="M0.5 32C0.5 14.603 14.603 0.5 32 0.5H392C409.397 0.5 423.5 14.603 423.5 32V374C423.5 391.397 409.397 405.5 392 405.5H371C348.632 405.5 330.5 423.632 330.5 446V466C330.5 483.397 316.397 497.5 299 497.5H32C14.603 497.5 0.5 483.397 0.5 466V32Z"
                stroke="url(#paint1_linear_464_22928)"
            />
        </g>
        <defs>
            <filter
                id="filter0_b_464_22928"
                x="-64"
                y="-64"
                width="552"
                height="626"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="32" />
                <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_464_22928"
                />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_464_22928"
                    result="shape"
                />
            </filter>
            <radialGradient
                id="paint0_radial_464_22928"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(238 573) rotate(-88.6002) scale(532.159 453.083)"
            >
                <stop stop-color="#EDCE8B" stop-opacity="0.2" />
                <stop offset="1" stop-color="#EDCE8B" stop-opacity="0" />
            </radialGradient>
            <linearGradient
                id="paint1_linear_464_22928"
                x1="424"
                y1="498"
                x2="-187.589"
                y2="61.5398"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="white" stop-opacity="0.2" />
                <stop offset="1" stop-color="white" stop-opacity="0.04" />
            </linearGradient>
        </defs>
    </svg>
);

export const WhyShouldYouBuyBG: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="560"
        height="272"
        viewBox="0 0 560 272"
        fill="none"
    >
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M560 32C560 14.3269 545.673 0 528 0H32C14.3269 0 0 14.3269 0 32V240C0 257.673 14.3269 272 32 272H436C453.673 272 468 257.673 468 240V228C468 201.49 489.49 180 516 180H528C545.673 180 560 165.673 560 148V32Z"
            fill="#111111"
        />
    </svg>
);

// Dahboard BG images
export const DashboardBalanceBG: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="auto"
        preserveAspectRatio="xMaxYMin meet"
        viewBox="0 0 1032 280"
        fill="none"
    >
        <g filter="url(#filter0_b_261_29306)">
            <path
                d="M0 24C0 10.7452 10.7452 0 24 0H936C949.255 0 960 10.7452 960 24V40C960 57.6731 974.327 72 992 72H1008C1021.25 72 1032 82.7452 1032 96V256C1032 269.255 1021.25 280 1008 280H24C10.7452 280 0 269.255 0 256V24Z"
                fill="#121212"
            />
        </g>
        <defs>
            <filter
                id="filter0_b_261_29306"
                x="-32"
                y="-32"
                width="1096"
                height="344"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="16" />
                <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_261_29306"
                />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_261_29306"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
);
export const DashboardBalanceMobileBG: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="auto"
        preserveAspectRatio="xMaxYMin meet"
        viewBox="0 0 343 328"
        fill="none"
    >
        <g filter="url(#filter0_b_261_28482)">
            <path
                d="M0 16C0 7.16345 7.16344 0 16 0H271C279.837 0 287 7.16344 287 16V32C287 45.2548 297.745 56 311 56H327C335.837 56 343 63.1634 343 72V312C343 320.837 335.837 328 327 328H16C7.16345 328 0 320.837 0 312V16Z"
                fill="#121212"
            />
        </g>
        <defs>
            <filter
                id="filter0_b_261_28482"
                x="-32"
                y="-32"
                width="407"
                height="392"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="16" />
                <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_261_28482"
                />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_261_28482"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
);
export const MiningPowerBG: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="auto"
        preserveAspectRatio="xMaxYMin meet"
        viewBox="0 0 560 464"
        fill="none"
    >
        <g filter="url(#filter0_b_261_29327)">
            <path
                d="M0 24C0 10.7452 10.7452 0 24 0H464C477.255 0 488 10.7452 488 24V40C488 57.6731 502.327 72 520 72H536C549.255 72 560 82.7452 560 96V440C560 453.255 549.255 464 536 464H24C10.7452 464 0 453.255 0 440V24Z"
                fill="#121212"
            />
        </g>
        <defs>
            <filter
                id="filter0_b_261_29327"
                x="-32"
                y="-32"
                width="624"
                height="528"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="16" />
                <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_261_29327"
                />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_261_29327"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
);
export const MiningPowerMobileBG: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="auto"
        preserveAspectRatio="xMaxYMin meet"
        viewBox="0 0 343 428"
        fill="none"
    >
        <g filter="url(#filter0_b_261_28504)">
            <path
                d="M0 16C0 7.16345 7.16344 0 16 0H271C279.837 0 287 7.16344 287 16V32C287 45.2548 297.745 56 311 56H327C335.837 56 343 63.1634 343 72V412C343 420.837 335.837 428 327 428H16C7.16345 428 0 420.837 0 412V16Z"
                fill="#121212"
            />
        </g>
        <defs>
            <filter
                id="filter0_b_261_28504"
                x="-32"
                y="-32"
                width="407"
                height="492"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="16" />
                <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_261_28504"
                />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_261_28504"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
);
export const GoldXRewardsBG: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="auto"
        preserveAspectRatio="xMaxYMin meet"
        viewBox="0 0 784 464"
        fill="none"
    >
        <g filter="url(#filter0_b_261_29352)">
            <path
                d="M0 24C0 10.7452 10.7452 0 24 0H519C532.255 0 543 10.7452 543 24V40C543 57.6731 557.327 72 575 72H760C773.255 72 784 82.7452 784 96V440C784 453.255 773.255 464 760 464H24C10.7452 464 0 453.255 0 440V24Z"
                fill="#121212"
            />
        </g>
        <defs>
            <filter
                id="filter0_b_261_29352"
                x="-32"
                y="-32"
                width="848"
                height="528"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="16" />
                <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_261_29352"
                />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_261_29352"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
);
export const GoldXRewardsMobileBG: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="auto"
        preserveAspectRatio="xMaxYMin meet"
        viewBox="0 0 343 352"
        fill="none"
    >
        <g filter="url(#filter0_b_261_28528)">
            <path
                d="M0 16C0 7.16345 7.16344 0 16 0H271C279.837 0 287 7.16344 287 16V32C287 45.2548 297.745 56 311 56H327C335.837 56 343 63.1634 343 72V336C343 344.837 335.837 352 327 352H16C7.16345 352 0 344.837 0 336V16Z"
                fill="#121212"
            />
        </g>
        <defs>
            <filter
                id="filter0_b_261_28528"
                x="-32"
                y="-32"
                width="407"
                height="416"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="16" />
                <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_261_28528"
                />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_261_28528"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
);
// -----------------------------------> Modals BG start <-----------------------------------
export const AddMintingRightBG1: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="auto"
        viewBox="0 0 1032 280"
        fill="none"
        preserveAspectRatio="none"
    >
        <g filter="url(#filter0_b_261_29306)">
            <path
                d="M0 24C0 10.7452 10.7452 0 24 0H936C949.255 0 960 10.7452 960 24V40C960 57.6731 974.327 72 992 72H1008C1021.25 72 1032 82.7452 1032 96V256C1032 269.255 1021.25 280 1008 280H24C10.7452 280 0 269.255 0 256V24Z"
                fill="#121212"
            />
        </g>
        <defs>
            <filter
                id="filter0_b_261_29306"
                x="-32"
                y="-32"
                width="1096"
                height="344"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="16" />
                <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_261_29306"
                />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_261_29306"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
);
export const NFTBottomDDMobileBG: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="auto"
        preserveAspectRatio="xMaxYMin meet"
        viewBox="0 0 343 428"
        fill="none"
    >
        <g filter="url(#filter0_b_261_28504)">
            <path
                d="M0 16C0 7.16345 7.16344 0 16 0H271C279.837 0 287 7.16344 287 16V32C287 45.2548 297.745 56 311 56H327C335.837 56 343 63.1634 343 72V412C343 420.837 335.837 428 327 428H16C7.16345 428 0 420.837 0 412V16Z"
                fill="#2e2d2a"
            />
        </g>
        <defs>
            <filter
                id="filter0_b_261_28504"
                x="-32"
                y="-32"
                width="407"
                height="492"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="16" />
                <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_261_28504"
                />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_261_28504"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
);
export const ModalsMobileBG: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="auto"
        viewBox="0 0 375 472"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
    >
        <g filter="url(#filter0_b_5331_10591)">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M311 24C311 10.7452 300.255 0 287 0H24C10.7452 0 0 10.7452 0 24V79.9999C0 79.9999 5.12369e-05 80 0.000114441 80C0.000177645 80 0.000228882 80.0001 0.000228882 80.0001V384V448C0.000228882 461.255 10.7454 472 24.0002 472H130.826C139.031 472 146.668 467.808 151.073 460.885L185.854 406.23C194.665 392.384 209.938 384 226.35 384H341.667H351C364.255 384 375 373.255 375 360V80.0001C375 80.0001 375 80 375 80C375 80 375 79.9999 375 79.9999V68C375 61.3726 369.627 56 363 56H335C321.745 56 311 45.2548 311 32V24Z"
                fill="black"
                fill-opacity="0.24"
            />
        </g>
        <defs>
            <filter
                id="filter0_b_5331_10591"
                x="-64"
                y="-64"
                width="503"
                height="600"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="32" />
                <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_5331_10591"
                />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_5331_10591"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
);
// ----------------------------------->  Modals BG end  <-----------------------------------
