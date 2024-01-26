import styles from "./Footer.module.css";

import { CentredContainer } from "../CentredContainer/CentredContainer";
import { SocialMedia } from "../SocialMedia/SocialMedia";
import { Logo } from "../Logo/Logo";
import { FooterDetailsColumn } from "../FooterDetailsColumn/FooterDetailsColumn";
import { FooterBottomBar } from "../FooterBottomBar/FooterBottomBar";

export function Footer() {
  const footerDetails = [
    {
      title: "Company",
      details: ["About", "Features", "Works", "Career"],
    },
    {
      title: "Help",
      details: [
        "Customer Support",
        "Delivery Details",
        "Terms & Conditions",
        "Privacy Policy",
      ],
    },
    {
      title: "FAQ",
      details: ["Account", "Manage Deliveries", "Orders", "Payments"],
    },
    {
      title: "Resources",
      details: [
        "Free eBooks",
        "Development Tutorial",
        "How to - Blog",
        "Youtube Playlist",
      ],
    },
  ];

  return (
    <div className={styles.footer}>
      <CentredContainer>
        <div className={styles.columnsWrapper}>
          <div className={styles.shortInfoColumn}>
            <div className={styles.inner}>
              <Logo />
              <p className={styles.footerShopDescription}>
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
            </div>
            <div>
              <SocialMedia />
            </div>
          </div>

          {footerDetails.map((column) => (
            <FooterDetailsColumn key={column.title} column={column} />
          ))}
        </div>
        <hr />
        <FooterBottomBar />
      </CentredContainer>
    </div>
  );
}
