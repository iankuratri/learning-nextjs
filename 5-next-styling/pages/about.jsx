import styles from "./../styles/About.module.css";

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p className={styles.highlight}>
        Highlighted Text: Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Blanditiis exercitationem necessitatibus mollitia, odit non
        reiciendis nam vero tempore veniam qui nihil. Non, obcaecati. Quae vitae
        delectus nisi a voluptates aliquid blanditiis accusantium beatae omnis
        quisquam, sequi dolorum, nemo sapiente corrupti dicta tempora voluptatem
        est explicabo adipisci animi ipsum debitis. Eveniet!
      </p>
    </div>
  );
}

export default About;
