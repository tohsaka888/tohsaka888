import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import { GithubOutlined, QqOutlined } from "@ant-design/icons";
import { animated, config, useSpring, useTransition } from "react-spring";

const features = [
  {
    title: "React&React Native",
    imageUrl:
      "https://gis-ops.com/wp-content/uploads/2019/12/React-logo-11.png",
    backgroundImage: "https://cdn.auth0.com/blog/react-js/react.png",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
    content:
      "React 是一个用于构建用户界面的 JavaScript 库。React 从诞生之初就是可被逐步采用的，因而你可以按需引入或多或少的 React 特性。不管你是想体验下 React，用它给简单的 HTML 页面增加一点交互，还是要开始一个完全由 React 驱动的复杂应用，该章节内容里的链接都能帮你快速开始。React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据改变时 React 能有效地更新并正确地渲染组件。",
  },
  {
    title: "Manjaro Linux",
    imageUrl:
      "https://blog.desdelinux.net/wp-content/uploads/2012/01/110726021053114429_f0_01-600x300.png",
    backgroundImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Manjaro-logo.svg/1024px-Manjaro-logo.svg.png",
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
    content:
      "Manjaro Linux（或简称 Manjaro）是基于 Arch Linux 的 Linux 发行版，使用 Xfce 、GNOME和 KDE Plasma 作为默认桌面环境，和 Arch 一样，采用滚动更新。其目标是为 PC 提供易于使用的自由的操作系统。Manjaro Linux 基于 Arch Linux，但拥有自己独立的软件仓库。Manjaro 的目标是让强大的 Arch 更方便用户使用，Manjaro 使用著名的 Pacman 且可以直接利用 AUR 上的资源。Manjaro 本身使用三个软件仓库：不稳定库，即含有那些不成熟的 Arch 包，这些包与 Arch 源有 1-2 天 的延后；测试库，每周同步一次，包含那些 Arch 不稳定源的包；以及稳定库，包含那些由开发团队确认稳定的软件。2013年年中，Manjaro 进入 beta 阶段。系统的关键部分，如 GUI 安装程序（目前使用的是 Antergos 安装程序的分支）、包管理器（Pacman）、MHWD（Manjaro HardWare Detection，Manjaro 硬件检测软件）以及 Manjaro 设置管理器都已经实现了。",
  },
  {
    title: "Express+MongoDB",
    imageUrl:
      "https://i2.wp.com/www.jacobsoft.com.mx/wp-content/uploads/2020/04/node-js-736399_960_720-2.png?fit=960%2C480&ssl=1",
    backgroundImage: "https://miro.medium.com/max/2800/0*T5dI492m4Ip73_kD.png",
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
    content:
      "Express 是一种保持最低程度规模的灵活 Node.js Web 应用程序框架，为 Web 和移动应用程序提供一组强大的功能。Express 提供精简的基本 Web 应用程序功能，而不会隐藏您了解和青睐的 Node.js 功能。",
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const title = useSpring({
    from: { opacity: 0, fontSize: 0, color: "white", Top: 0 },
    to: { opacity: 1, fontSize: 50, color: "black" },
    config: config.default && { duration: 1000 },
  });
  const text = useSpring({
    from: { opacity: 0, transform: "translate3d(-100%,0,0)" },
    to: { opacity: 1, transform: "translate3d(0,0,0)" },
    config: config.default && { duration: 500 },
    delay: 500,
  });
  const icon = useSpring({
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    to: { opacity: 1, transform: "translate3d(0,0,0)" },
    config: config.default && { duration: 500 },
    delay: 500,
  });
  const testRef = useRef();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header
        // className={clsx("hero hero--primary", styles.heroBanner)}
        style={{
          backgroundImage: `url(https://w.wallhaven.cc/full/nk/wallhaven-nk5kk1.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
          height: "110vh",
        }}
      >
        <div className="container">
          <div style={{ marginLeft: "28vw", paddingTop: "10vw" }}>
            <animated.h1 className="hero__title" style={title}>
              Hello!我是<span style={{ color: "#3578e5" }}>Tohsaka888</span>
            </animated.h1>
            <animated.p
              className="hero__subtitle"
              style={{ marginTop: "5vh" }}
              style={text}
            >
              如果你正在学习React/React Native,又喜欢折腾Manjaro
              Linux,顺便还想了解一下node.js。那么你可能在这里找到答案。最近在折腾express+MongoDB，随缘更新。
              计算机小白,有什么地方写的不对，欢迎QQ和我交流。
            </animated.p>
            <animated.div style={{ marginBottom: "20px" }} style={icon}>
              <GithubOutlined style={{ fontSize: "30px" }} />
              <span
                style={{
                  marginLeft: "10px",
                  color: "#3578e5",
                  fontWeight: "bold",
                }}
              >
                Tohsaka888
              </span>
              <QqOutlined style={{ fontSize: "30px", marginLeft: "20px" }} />
              <span
                style={{
                  marginLeft: "10px",
                  color: "#3578e5",
                  fontWeight: "bold",
                }}
              >
                2099527121
              </span>
            </animated.div>
            <div
              className={styles.buttons}
              style={{ float: "left", marginTop: "2vh" }}
            >
              <Link
                className={clsx(
                  "button button--outline button--secondary button--lg",
                  styles.getStarted
                )}
                to={useBaseUrl("docs/")}
              >
                <div>Get Started</div>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row" style={{ marginBottom: "5vh" }}>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
              {features.map((item, index) => {
                return (
                  <div ref={testRef}>
                    <div
                      style={{
                        backgroundImage: `url(${item.backgroundImage})`,
                        backgroundAttachment: "fixed",
                        width: "100%",
                        height: "50vh",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        opacity: 1,
                        zIndex: -1,
                      }}
                      key={index}
                    ></div>
                    <div
                      style={{
                        zIndex: 1,
                        width: "100%",
                        marginTop: "10vh",
                        marginBottom: "10vh",
                      }}
                    >
                      <div style={{ width: "100%" }}>
                        <animated.h1
                          style={{ fontWeight: "bold" }}
                          style={title}
                        >
                          {item.title}
                        </animated.h1>
                      </div>
                      <div
                        style={{
                          textAlign: "start",
                          fontSize: "18px",
                        }}
                      >
                        {item.content}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
