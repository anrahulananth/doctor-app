import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker, HiOutlineExternalLink } from "react-icons/hi";
import GoogleMapReact from "google-map-react";
import { MAP_VALUES } from "../../constants";
import { MdLocationOn } from "react-icons/md";
import styled from "styled-components";
import useDetectScreen from "../../utils/hooks";
import classNames from "classnames";

const Marker = styled(MdLocationOn)`
    display: inline-flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    transform: translate(-50%, -100%);
`;

const MapWithMarker = ({ isPhone }) => (
    <div style={{ height: isPhone ? "300px" : "720px", width: "100%" }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={{
                lat: MAP_VALUES.LATITIUDE,
                lng: MAP_VALUES.LONGITUDE
            }}
            defaultZoom={15}
        >
            <Marker
                className="text-red-500 h-10 w-10"
                lat={MAP_VALUES.LATITIUDE}
                lng={MAP_VALUES.LONGITUDE}
            />
        </GoogleMapReact>
    </div>
);

const ContactUs = ({ isPhone }) => (
    <div className={classNames({ "absolute top-0 left-0": !isPhone, "relative": isPhone })}>
        <div className="relative max-w-xl mx-auto px-4 lg:max-w-7xl">
            <div className="relative overflow-hidden bg-white max-w-xl mt-10 mb-10 px-10 py-10 rounded-lg shadow-md">
                <h3 className="text-lg text-text2 font-bold">Contact Us</h3>
                <p className="mt-6 text-base max-w-3xl">
                </p>
                <dl className="mt-8 space-y-6 text-text2">
                    <dt>
                        <span className="sr-only">Location</span>
                    </dt>
                    <dd className="flex text-base">
                        <HiOutlineLocationMarker className="flex-shrink-0 w-6 h-6 text-gray-400" aria-hidden="true" />
                        <span className="ml-3 font-bold">Location</span>
                    </dd>
                    <dt>
                        <span className="sr-only">Phone number</span>
                    </dt>
                    <dd className="flex text-base">
                        <span className="ml-6">Gynecology/Obstetrics Clinic<br />
                            #B-001, 10/1, Ground floor, Victoria lawns,
                            Victoria Road, Victoria Layout, Bangalore</span>
                    </dd>
                    <dt>
                        <span className="sr-only">Phone number</span>
                    </dt>
                    <dd className="flex text-base">
                        <HiOutlinePhone className="flex-shrink-0 w-6 h-6 text-gray-400" aria-hidden="true" />
                        <span className="ml-3 font-bold">Phone number</span>
                    </dd>
                    <dt>
                        <span className="sr-only">Phone number</span>
                    </dt>
                    <dd className="flex text-base">
                        <span className="ml-6">+91-9901600911</span>
                    </dd>
                    <dt>
                        <span className="sr-only">Email</span>
                    </dt>
                    <dd className="flex text-base">
                        <HiOutlineMail className="flex-shrink-0 w-6 h-6 text-gray-400" aria-hidden="true" />
                        <span className="ml-3 font-bold">Email ID</span>
                    </dd>
                    <dt>
                        <span className="sr-only">Email</span>
                    </dt>
                    <dd className="flex text-base">
                        <span className="ml-6">info@divacare.in</span>
                    </dd>
                    <dt className="flex items-center">
                        <HiOutlineExternalLink className="flex-shrink-0 w-6 h-6 text-gray-400" aria-hidden="true" />
                        <span className="ml-3 font-bold underline">
                            <a href={`https://maps.google.com/maps?ll=${MAP_VALUES.LATITIUDE},${MAP_VALUES.LONGITUDE}&z=14&t=m&hl=en-US&gl=IN&mapclient=embed&cid=14533616059994890979`}>View on Google Maps</a>
                        </span>
                    </dt>
                </dl>
            </div>
        </div>
    </div>
);

export default function Contact() {
    const { isPhone } = useDetectScreen();
    return (
        <section id="contact" className="relative overflow-hidden">
            {
                !isPhone ? (
                    <div className="relative w-full h-full">
                        <MapWithMarker isPhone={isPhone} />
                        <ContactUs isPhone={isPhone} />
                    </div>
                ) : (
                    <div className="relative w-full h-full">
                        <ContactUs isPhone={isPhone} />
                        <MapWithMarker isPhone={isPhone} />
                    </div>
                )
            }

        </section>
    );
}
