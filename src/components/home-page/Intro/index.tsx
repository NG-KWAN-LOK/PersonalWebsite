import styles from "./style.module.scss";

const Intro = () => {
  return (
    <div id={"Intro"} className={styles.container}>
      <div className={styles.container_bg_secondHeader}></div>
      <div className={styles.container_bg_secondContent}></div>
      <div className={styles.container_contain}>
        <div className={styles.titleSection}>
          <div className={styles.titleSection_container}>
            <header className={styles.titleSection_container_title}>
              INTRO
            </header>
            <div className={styles.titleSection_container_subtitle}>
              What I am all about.
            </div>
          </div>
        </div>
        <div className={styles.infoSection}>
          <div className={styles.infoSection_container}>
            <p>
              Growing up in Hong Kong, I strongly believe that computer have had
              a profound impact on modern human history. Computers make life
              easier for human being in various ways. I want to create my own
              webs and apps. Wherefore this shot in my life, I am interested in
              Front-end Web Developer.
            </p>
            <p>
              Academically, I have excelled in Logic Thinking and done well in
              Mathematics and Programming skills. I am fulfilling and satisfying
              after solving a question. I enjoy the process of looking for
              programming as perfect executions and done a Maths problem. Become
              a Front-end lover, I know that I should devote myself
              wholeheartedly to learning Front-end framework likes React and Vue
              to get into the Front-end’s world, so I have made a special effort
              to enhance my Front-end framework programming skills proficiency.
            </p>
            <p>
              As an all-round student, I enjoy to serve and to lead. I was
              privileged to be elected as the President of the Student Council
              in secondary school, I had my stage to demonstrate a sense of my
              responsibility and leadership. Apart with, it is a opportunities
              for me to work with my Council’s member and the others in
              organizing activities. It is also an occasion training my brain to
              think logically and effective. By the end of a year, I had already
              been amply rewarded for this success. In my experience, have a
              excellent communication skills and logically thinking skills not
              only beneficial in the programming engineer’s world, it but also
              beneficial in our society.
            </p>
            <p>
              To grow further, I am eager to become involved in community work.
              I participated in flag selling every years when I stayed in Hong
              Kong. Also I have worked as a volunteer in Elderly Home in Taiwan.
              I have developed a sense of empathy. I strongly believe that I
              have to learn to put ourselves into others’ shoes and learn to
              make contribution to our society.
            </p>
            <p>
              I believe that I can showcase my talent to stand in technology and
              would be mutually beneficial and the society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
