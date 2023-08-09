import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

// export default function Home() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`${siteConfig.title}`}
//       description="Learn JavaScript fundamentals through a comprehensive written guide. Covers variables, data types, functions, scope, arrays, DOM manipulation, and more.">
//       <HomepageHeader />
//       <main>
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   );
// }

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
    <Layout>
		<div style={{ backgroundColor: "#0e0641" }}>
			{/* set background hero image */}

			<div className={`${styles.hero} hero hero--primary hero--full-height`}>
				<div className='container' style={{marginInline: "3rem"}}>
					<div className='row'>
						<div className='col col--6'>
							<h1 className={styles.hero__title}>Namaste <span className={styles.span__js}> JavaScript</span> Handbook</h1>
						</div>
					</div>
				</div>
			</div>

		</div></Layout>
	);
}
