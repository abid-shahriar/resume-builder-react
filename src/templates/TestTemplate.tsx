/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import { Page, Text, Image, Document, View, StyleSheet, Font, Link } from '@react-pdf/renderer';

Font.register({
  family: 'Roboto',
  fonts: [
    { src: '/fonts/roboto_slab/RobotoSlab-Regular.ttf', weight: 'normal' },
    { src: '/fonts/roboto_slab/RobotoSlab-Medium.ttf', weight: 'medium' },
    { src: '/fonts/roboto_slab/RobotoSlab-Bold.ttf', weight: 'bold' }
  ]
});

Font.register({
  family: 'RobotoSlab',
  fonts: [
    { src: '/fonts/roboto_slab/RobotoSlab-Regular.ttf', weight: 'normal' },
    { src: '/fonts/roboto_slab/RobotoSlab-Medium.ttf', weight: 'medium' },
    { src: '/fonts/roboto_slab/RobotoSlab-Bold.ttf', weight: 'bold' }
  ]
});

// register poppins font
Font.register({
  family: 'Poppins',
  fonts: [
    { src: '/fonts/poppins/Poppins-Regular.ttf', weight: 'normal' },
    { src: '/fonts/poppins/Poppins-Medium.ttf', weight: 'medium' },
    { src: '/fonts/poppins/Poppins-Bold.ttf', weight: 'bold' }
  ]
});

const styles = StyleSheet.create({
  page: {
    paddingTop: 18,
    paddingBottom: 0,
    paddingHorizontal: 18,
    backgroundColor: '#E9ECF5'
  },

  mainContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between'
  },

  leftSection: {
    width: '58.5%',
    padding: '0 0 0 15'
  },

  rightSection: {
    width: '41.5%',
    backgroundColor: '#273E47',
    padding: '10 10 10 10',
    position: 'relative',
    overflow: 'hidden'
  },

  username: {
    fontSize: 28,
    fontWeight: 5,
    textTransform: 'uppercase',
    color: '#000000',
    lineHeight: '1',
    marginTop: '0',
    fontFamily: 'RobotoSlab'
  },

  designation: {
    fontSize: 15,
    color: '#333',
    marginTop: '5px',
    fontFamily: 'RobotoSlab'
  },

  image: {
    width: '165px',
    height: '165px',
    borderRadius: '100',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '8px',
    marginTop: '5px',
    opacity: 1
    // objectFit: 'fill'
  },

  twocolumn: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '1'
  },
  padder: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '1',
    marginRight: '8'
  },
  padder2: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '0'
    // marginRight: '8'
  },

  bull_circle: {
    width: '4',
    height: '4',
    borderRadius: 50,
    margin: '7 4 8 2',
    backgroundColor: '#ffffff'
  },

  bull_circleleft: {
    width: '4',
    height: '4',
    borderRadius: 50,
    margin: '7 6 7 2',
    backgroundColor: '#000000'
  },
  title: {
    fontSize: 13,
    padding: '3 6',
    textTransform: 'uppercase',
    marginTop: '15',
    marginBottom: '8',
    color: '#000000',
    fontWeight: 'bold',
    fontFamily: 'RobotoSlab',
    letterSpacing: 3
  },
  titleleft: {
    fontSize: 13,
    padding: '3 6',
    textTransform: 'uppercase',
    marginTop: '20',
    color: '#000000',
    fontWeight: 'bold',
    fontFamily: 'RobotoSlab',
    letterSpacing: 3
  },
  text: {
    fontSize: 10,
    marginTop: '2.5',
    color: '#ffffff',
    fontFamily: 'RobotoSlab'
  },
  linkText: {
    color: 'red'
  },
  textleft: {
    fontSize: 11,
    marginTop: '2.5',
    color: '#333',
    lineHeight: '1.4',
    fontFamily: 'RobotoSlab'
  },
  firsttitle: {
    fontSize: 15,
    color: 'black',
    textTransform: 'capitalize',
    marginTop: '10px',
    marginBottom: '2px',
    fontWeight: 'normal',
    fontFamily: 'RobotoSlab'
  },
  subtitle: {
    fontSize: 10,
    color: 'black',
    fontFamily: 'RobotoSlab'
  },
  subtitleSecondary: {
    fontSize: 10,
    color: 'black',
    marginTop: 3,
    marginBottom: '5',
    fontFamily: 'RobotoSlab'
  },
  bgStyles: {
    position: 'absolute',
    width: '200%',
    height: '7',
    left: -100,
    backgroundColor: '#A3C3D9',
    transformOrigin: 'center',
    transform: 'rotate(130deg)',
    opacity: 0.2
  },

  bgStyles1: {
    height: 100,
    top: 50,
    transform: 'rotate(0)'
  },
  bgStyles2: {
    bottom: -60
  },
  bgStyles3: {
    bottom: -80
  },
  bgStyles4: {
    bottom: -100
  },
  bgStyles5: {
    bottom: -120
  },
  bgStyles6: {
    bottom: -140
  },
  bgStyles7: {
    bottom: -160
  },
  rightsection1: {}
});

export const TestTemplate = () => {
  const userColor = '#A3C3D9';

  return (
    <Document>
      <Page size='A4' style={{ ...styles.page }}>
        <View style={styles.mainContainer}>
          <View style={styles.leftSection}>
            <Text style={styles.username}>ABID SHAHRIArrrR</Text>
            <Text style={styles.designation}>Full Stack Web Developer</Text>

            <View style={styles.rightsection1}>
              <Text style={{ ...styles.title, backgroundColor: `${userColor}` }}>About Me</Text>

              <Text style={{ ...styles.textleft }}>
                Creative full stack JavaScript Developer with 3+ years of{'\n'} experience and have a passion for building responsive, {`\n`}
                interactive and secure web applications. I have a strong {`\n`} background in web development and have worked on a wide range of
                projects. I like learning new technologies and {'\n'} always try to keep myself updated with the latest trends.
              </Text>
            </View>

            {/* Education */}

            <React.Fragment>
              <Text style={{ ...styles.titleleft, backgroundColor: `${userColor}` }}>EDUCATION</Text>

              <View>
                <Text style={styles.firsttitle}>Bogura Zilla School, Bogura</Text>
                <Text style={styles.subtitle}>Secondary School Certificate(SSC) in Science</Text>
                <Text style={{ ...styles.subtitle, fontSize: '10', color: 'grey', marginTop: '1' }}>Feb 2008 - Feb 2016</Text>
              </View>
              <View>
                <Text style={styles.firsttitle}>Govt. Azizul Haque College, Bogura</Text>
                <Text style={styles.subtitle}>Higher Secondary Certificate(HSC) in Science</Text>
                <Text style={{ ...styles.subtitle, fontSize: '10', color: 'grey', marginTop: '1' }}>Feb 2016 - Feb 2018</Text>
              </View>
            </React.Fragment>

            <React.Fragment>
              <Text style={{ ...styles.titleleft, backgroundColor: `${userColor}` }}>WORK EXPERIENCE</Text>

              <View>
                <View>
                  <Text style={styles.firsttitle}>Full Stack Developer</Text>
                  <Text style={styles.subtitle}>
                    Valkyrie IT LTD | <Link src='https://www.valkyrie-it.com/deck'>https://www.valkyrie-it.com/deck</Link>{' '}
                  </Text>
                  <Text style={{ ...styles.subtitleSecondary, color: 'grey' }}>Nov 2021 - Present</Text>
                </View>

                <Text style={{ ...styles.textleft }}>
                  As a full stack dev., my responsibilities are creating secure and scalable backend and frontend, doing research on new technologies,
                  testing UI and API to make sure everything is working as it should be.
                </Text>
              </View>

              <View>
                <View>
                  <Text style={styles.firsttitle}>Frontend Developer</Text>
                  <Text style={{ ...styles.subtitle }}>
                    Wikiance | <Link src='https://wikiance.com'>https://wikiance.com</Link>
                  </Text>
                  <Text style={{ ...styles.subtitleSecondary, color: 'grey' }}>Nov 2020 - Sep 2021</Text>
                </View>

                <Text style={{ ...styles.textleft }}>
                  I was the lead developer on their flagship project called {`\n`} Techiio. My responsibilities were implementing api by {`\n`}
                  coordinating with backend developers, adding new features, testing, scaling up, bug fixing, training interns etc. Learned a lot
                  about teamwork, communication, best practices, and how to work in a fast-paced environment from here.
                </Text>
              </View>

              <View>
                <View>
                  <Text style={styles.firsttitle}>Freelancer</Text>
                  <Text style={{ ...styles.subtitle, color: 'grey' }}>Feb 2019 - Oct 2020</Text>
                  <Text style={{ ...styles.subtitleSecondary, marginBottom: '3' }}></Text>
                </View>

                <Text style={{ ...styles.textleft }}>
                  In my early days, I did freelancing with some local clients. I used to make school/restaurant and small e-commerce {`\n`} websites
                  for them. After that I started freelancing with some ote clients. Gained a bunch of new skills doing these.
                </Text>
              </View>
            </React.Fragment>
          </View>
          <View style={styles.rightSection}>
            <View style={{ ...styles.bgStyles, ...styles.bgStyles1 }}></View>
            <View style={{ ...styles.bgStyles, ...styles.bgStyles2 }}></View>
            <View style={{ ...styles.bgStyles, ...styles.bgStyles3 }}></View>
            <View style={{ ...styles.bgStyles, ...styles.bgStyles4 }}></View>
            <View style={{ ...styles.bgStyles, ...styles.bgStyles5 }}></View>
            <View style={{ ...styles.bgStyles, ...styles.bgStyles6 }}></View>
            <View style={{ ...styles.bgStyles, ...styles.bgStyles7 }}></View>

            <View>
              <Image src='/me4.jpg' style={{ ...styles.image, border: `5 solid ${userColor}` }} />
            </View>
            <Text style={{ ...styles.title, backgroundColor: `${userColor}` }}>CONTACT</Text>

            <View style={{ ...styles.padder }}>
              <View style={{ ...styles.bull_circle }}></View>
              <Text style={styles.text}>Bogura, Bangladesh</Text>
            </View>

            <View style={{ ...styles.padder }}>
              <View style={{ ...styles.bull_circle }}></View>
              <Text style={styles.text}>
                <Link style={styles.text} src='tel:+8801726389558'>
                  +8801726389558
                </Link>
              </Text>
            </View>

            <View style={{ ...styles.padder }}>
              <View style={{ ...styles.bull_circle }}></View>
              <Text style={styles.text}>
                <Link style={styles.text} src='mailto:abidshahriar7@gmail.com'>
                  abidshahriar7@gmail.com
                </Link>
              </Text>
            </View>

            <View style={{ ...styles.padder }}>
              <View style={{ ...styles.bull_circle }}></View>
              <Text style={styles.text}>
                <Link style={styles.text} src='https://github.com/abid-shahriar'>
                  https://github.com/abid-shahriar
                </Link>
              </Text>
            </View>

            <View style={{ ...styles.padder }}>
              <View style={{ ...styles.bull_circle }}></View>

              <Text style={styles.text}>
                <Link style={styles.text} src='https://linkedin.com/in/abidshahriar'>
                  https://linkedin.com/in/abidshahriar
                </Link>
              </Text>
            </View>

            <View style={{ ...styles.padder }}>
              <View style={styles.bull_circle}></View>
              <Text style={styles.text}>
                <Link style={styles.text} src='https://abidshahriar.me'>
                  https://abidshahriar.me
                </Link>
              </Text>
            </View>

            <React.Fragment>
              <Text style={{ ...styles.title, backgroundColor: `${userColor}` }}>SKILLS</Text>

              {[
                'HTML | CSS | SCSS',
                'JavaScript | TypeScript',
                'ReactJS | NextJS',
                'Redux | ContextApi',
                'NodeJS | Express',
                'Mongoose | MongoDB',
                'Postgres | Prisma | Knex',
                'Git | Github',
                'DigitalOcean App platform | AWS S3 '
              ].map((skill: any, index: number) => (
                <View style={styles.padder2} key={index}>
                  <View style={styles.bull_circle}></View>
                  <View>
                    <Text style={{ ...styles.text }}>{skill}</Text>
                  </View>
                </View>
              ))}
            </React.Fragment>

            {/* Language*/}

            <React.Fragment>
              <Text style={{ ...styles.title, backgroundColor: `${userColor}` }}>LANGUAGES</Text>
              {['Bengali (Native)', 'English (Professional working proficiency)', 'Hindi (Limited working proficiency)'].map(
                (lang: any, index: any) => (
                  <View style={styles.padder2} key={index}>
                    <View style={styles.bull_circle}></View>
                    <View>
                      <Text style={{ ...styles.text }}>{lang}</Text>
                    </View>
                  </View>
                )
              )}
            </React.Fragment>

            {/* Hobbies */}

            <React.Fragment>
              <Text style={{ ...styles.title, backgroundColor: `${userColor}` }}>HOBBIES</Text>

              {['Coding', 'Travelling', 'Cooking', 'Gaming'].map((hobby: any, index: any) => (
                <View style={styles.padder2} key={index}>
                  <View style={styles.bull_circle}></View>
                  <Text style={{ ...styles.text }}>{hobby}</Text>
                </View>
              ))}
            </React.Fragment>
          </View>
        </View>
      </Page>
    </Document>
  );
};
