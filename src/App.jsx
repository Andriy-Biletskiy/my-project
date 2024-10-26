import Button from '@components/Button';
import Header from '@components/Header';
import Menu from '@components/Menu';
import Tabs from '@components/Tabs';
import List from '@components/List';
import ListItem from '@components/ListItem';
import React, { useState } from 'react';

import styles from './App.css';

const content = [
    [
        'React is extremely popular',
        'It makes building complex, interactive UIs a breeze',
        "It's powerful & flexible",
        'It has a very active and versatile ecosystem',
    ],
    ['Components, JSX & Props', 'State', 'Hooks (e.g., useEffect())', 'Dynamic rendering'],
    [
        'Official web page (react.dev)',
        'Next.js (Fullstack framework)',
        'React Native (build native mobile apps with React)',
    ],
];

export default function App() {
    const [activeContentIndex, setActiveContentIndex] = useState();

    // let activeContentIndex = 0;
    //
    // const setActiveContentIndex = (activeIndex) => {
    //     activeContentIndex = activeIndex;
    //
    //     console.log('setActiveContentIndex', activeIndex);
    //     console.log('activeContentIndex', activeContentIndex);
    // }

    // let listContent = <h3>Please select one of the tabs</h3>;
    // if (activeContentIndex !== undefined) {
    //     listContent = (
    //         <Tabs id="tab-content">
    //             <List>
    //                 {content[activeContentIndex].map((item) => (
    //                     <ListItem key={item}>{item}</ListItem>
    //                 ))}
    //             </List>
    //         </Tabs>
    //     );
    // }

    return (
        <div className={styles.container}>
            <div id="tabs" className={styles.tabs}>
                <Header title="React.js" subTitle="i.e., using the React library for rendering the UI" />
                <Menu>
                    <Button isActive={activeContentIndex === 0} onClick={() => setActiveContentIndex(0)}>
                        Why React?
                    </Button>
                    <Button isActive={activeContentIndex === 1} onClick={() => setActiveContentIndex(1)}>
                        Core Features
                    </Button>
                    <Button isActive={activeContentIndex === 2} onClick={() => setActiveContentIndex(2)}>
                        Related Resources
                    </Button>
                </Menu>
                {/*{listContent}*/}
                {activeContentIndex === undefined ? <h3>Please select one of the tabs</h3> : undefined }
                {activeContentIndex === undefined ? undefined : <Tabs id="tab-content">
                    <List>
                        {content[activeContentIndex].map((item) => (
                            <ListItem key={item}>{item}</ListItem>
                        ))}
                    </List>
                </Tabs>}
            </div>
        </div>
    );
}
