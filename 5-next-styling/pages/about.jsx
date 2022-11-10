import styles from "./../styles/About.module.css";
import stylesScss from "./../styles/About.module.scss";

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p className={styles.highlight}>
        Highlighted Text Using CSS: Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Blanditiis exercitationem necessitatibus mollitia,
        odit non reiciendis nam vero tempore veniam qui nihil. Non, obcaecati.
        Quae vitae delectus nisi a voluptates aliquid blanditiis accusantium
        beatae omnis quisquam, sequi dolorum, nemo sapiente corrupti dicta
        tempora voluptatem est explicabo adipisci animi ipsum debitis. Eveniet!
      </p>
      <p className={stylesScss.highlightScss}>
        Highlighted Text Using SCSS: Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Blanditiis exercitationem necessitatibus mollitia,
        odit non reiciendis nam vero tempore veniam qui nihil. Non, obcaecati.
        Quae vitae delectus nisi a voluptates aliquid blanditiis accusantium
        beatae omnis quisquam, sequi dolorum, nemo sapiente corrupti dicta
        tempora voluptatem est explicabo adipisci animi ipsum debitis. Eveniet!
      </p>
    </div>
  );
}

export default About;
