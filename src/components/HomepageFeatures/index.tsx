import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { useLocation } from '@docusaurus/router';

type FeatureItem = {
  title: string;
  url: string;
  img: string;
  //Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Breakfast',
    url: '/breakfast/category/breakfast',
    img: '/img/breakfast.jpg',
   // Svg: require('@site/static/img/undraw_breakfast.svg').default,
    description: (
      <>
        This will take you to any meal with the Breakfast tag
      </>
    ),
  },
  {
    title: 'Lunch',
    url: '',
    img: '/img/breakfast.jpg',
   // Svg: require('@site/static/img/undraw_street-food.svg').default,
    description: (
      <>
      this will take you to any meal with the Lunch tag
      </>
    ),
  },
  {
    title: 'Dinner',
    url: '/categoryPage',
    img: '/img/breakfast.jpg',
    // /static/img/breakfast.jpg
    //Svg: require('@site/static/img/undraw_barbecue.svg').default,
    description: (
      <>
        This will take you to the another page where you can choose which meat you are working with.
      </>
    ),
  },
  {
    title: 'Dessert',
    url: '/desserts/category/desserts',
    img: '/img/breakfast.jpg',
   // Svg: require('@site/static/img/undraw_donut-love.svg').default,
    description: (
      <>
        This will take you to any recipe with the dessert tag.
      </>
    ),
  },
  {
    title: 'Sides',
    url: '/sides/category/sides',
    img: '/img/breakfast.jpg',
    //Svg: require('@site/static/img/undraw_chef.svg').default,
    description: (
      <>
      this will take to you to any meal with the tag of sides
      </>
    ),
  },
];


//function Feature({Svg, title, url, description}: FeatureItem) {
  function Feature({ title, url, img, description }: FeatureItem) {
    console.log(`Rendering feature: ${title}, img: ${img}`);
    return (
      <div className={clsx('col col--4')}>
        <div className="text--center">
          <a href={url}>
            {img && <img className={styles.FeatureSvg} src={img} alt={title} role="img" />}
          </a>
        </div>
        <div className="text--center padding-horiz--md">
          <a href={url}><Heading as="h3">{title}</Heading></a>
          <p>{description}</p>
        </div>
      </div>
    );
  }

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
