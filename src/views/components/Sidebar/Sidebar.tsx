import React from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import {
    ArrowTransformIcon,
    DiscordIcon,
    InstaIcon,
    TelegramIcon,
    TwitterIcon,
} from "../../../assets/icons";

const Sidebar: React.FC = () => {
    return (
        <>
            <motion.div
                className="sidebartop"
                viewport={{ once: false, amount: 0.3 }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    delay: 0,
                    duration: 0.5,
                }}
            >
                <img
                    src="/images/common/Goldx-logo.svg"
                    className="logo"
                    alt=""
                />
            </motion.div>
            <div className="sidebarbottom">
                <div className="socialiconswrapper">
                    <motion.div
                        className="sclicon"
                        viewport={{ once: false, amount: 0.3 }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 0.92,
                            duration: 0.3,
                        }}
                    >
                        <DiscordIcon />
                    </motion.div>
                    <motion.div
                        className="sclicon"
                        viewport={{ once: false, amount: 0.3 }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 0.2 + 0.92,
                            duration: 0.3,
                        }}
                    >
                        <InstaIcon />
                    </motion.div>
                    <motion.div
                        className="sclicon"
                        viewport={{ once: false, amount: 0.3 }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 0.4 + 0.92,
                            duration: 0.3,
                        }}
                    >
                        <TelegramIcon />
                    </motion.div>
                    <motion.div
                        className="sclicon"
                        viewport={{ once: false, amount: 0.3 }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 0.6 + 0.92,
                            duration: 0.3,
                        }}
                    >
                        <TwitterIcon />
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
