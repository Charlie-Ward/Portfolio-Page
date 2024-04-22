'use client'
import React, { useState } from 'react';
import TypingEffect from "@/app/components/TypingEffect";
import ProjectBox from "@/app/components/ProjectBox";
import { FaGithub } from 'react-icons/fa';

import styles from './page.module.css';

export default function Home() {
  const [typingComplete, setTypingComplete] = useState(false);
  const handleTypingComplete = () => {
    setTypingComplete(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <div className="container">
        <TypingEffect onTypingComplete={handleTypingComplete} /> {/* Pass the prop here */}
        {typingComplete && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
            <div className="w-96">
              <ProjectBox 
                imageSrc="/assets/banGUI.png"
                title="BanGUI Plugin"
                language='Java'
                description="BanGUI is a plugin for a spigot minecraft server running spigot 1.17. It allows you to moderate your minecraft server with ease with features such as BanGUI, Player Reporting, Lockdown, Staff Chat & Freeze Player."
                githubLink="https://github.com/Charlie-Ward/BanGUIPlugin"
                externalLink="https://www.spigotmc.org/resources/bangui.104948/"
                secondLink="https://www.curseforge.com/minecraft/bukkit-plugins/bangui-plugin"
              />
            </div>
            <div className="w-96">
              <ProjectBox 
                imageSrc="/assets/shorthandCommands.png"
                title="Shorthand Commands"
                language='Java'
                description="Provides all commanly used commands but shorthand"
                githubLink="https://github.com/Charlie-Ward/Shorthand-Commands"
                externalLink="https://www.spigotmc.org/resources/shorthand-commands.106088/"
                secondLink="https://www.curseforge.com/minecraft/bukkit-plugins/shorthand-commands"
              />
            </div>
            <div className="w-96">
              <ProjectBox 
                title="CPU Simulator"
                language='Python'
                description="This is a small CPU simulator"
                githubLink="https://github.com/Charlie-Ward/CPU-Project"
              />
            </div>
            <div className="w-96">
              <ProjectBox 
                title="LousyNetVanish Plugin"
                language='Java'
                description="A spigot vanish plugin using a jedis database to allow for server network usage"
                githubLink="https://github.com/Charlie-Ward/LousyNetVanishPlugin"
              />
            </div>
            <div className="w-96">
              <ProjectBox 
                title="LousyNetLockdown Plugin"
                language='Java'
                description="A spigot lockdown plugin using a jedis database to allow for server network usage"
                githubLink="https://github.com/Charlie-Ward/LousyNetLockdownPlugin"
              />
            </div>
            <div className="w-96">
              <ProjectBox 
                title="LousyNetPlayerCountUtils"
                language='Java'
                description="A spigot player count tracking plugin using a jedis database to allow for server network usage"
                githubLink="https://github.com/Charlie-Ward/LousyNetPlayerCountUtils"
              />
            </div>
            <div className="w-96">
              <ProjectBox 
                imageSrc="/assets/newPortfolio.png"
                title="New Portfolio"
                language='Next.js'
                description="My new portfolio page. You are currently here."
                githubLink="https://github.com/Charlie-Ward/Portfolio-Page"
                externalLink="https://charlie-ward.vercel.app"
              />
            </div>
            <div className="w-96">
              <ProjectBox 
                imageSrc="/assets/oldPortfolio.webp"
                title="Old Portfolio"
                language='React.js'
                description="My old portfolio page. No longer works."
                githubLink="https://github.com/Charlie-Ward/charlie-ward.info"
              />
            </div>
          </div>
        )}
        {typingComplete && (
          <div className={styles.projectLinks}>
            <a href='https://github.com/charlie-ward' target="_blank" rel="noopener noreferrer" className={styles.link}>
              <div className={styles.iconContainer}>
                  <FaGithub className={styles.icon} />
                </div>
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
