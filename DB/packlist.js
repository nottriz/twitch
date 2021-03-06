const ModPack = ({ name = '[Un-named]', launcher = '[Unknown]', link = '[Link Unavailable]', dev = '[Unknown]' }) => {

    const data = {
        public: `The current pack is ${name}. You can download it from ${launcher}. -> ${link}`,
        open_beta: `The current pack is ${name}. This is currently an Open Beta. You can download it from ${launcher}. -> ${link}`,
        closed_beta: `The current pack is ${name}. This is currently a Closed Beta. This cannot be downloaded yet.`,
        wip: `The current pack is ${name}. This pack is created by ${dev}. This pack is still in development and cannot be downloaded.`
    };

    return data;
};

export const packlist = {
    acalltoadventure: ModPack({ name: 'A Call to Adventure', dev: 'EnderGrimm' }).wip,
    allinone: ModPack({ name: 'All in One [Modded One Block]', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/all-in-one-modded-one-block' }).public,
    amnesia: ModPack({ name: 'Amnesia', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/Amnesia' }).public,
    atm3ex: ModPack({ name: 'All the Mods 3: Expert Mode', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/all-the-mods-3-expert' }).public,
    atm6: ModPack({ name: 'All the Mods 6', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/all-the-mods-6' }).public,
    atm6sky: ModPack({ name: 'All the Mods 6: To The Sky', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/all-the-mods-6-to-the-sky-atm6s' }).public,
    antichem: ModPack({ name: 'Anti-Matter Chemistry', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/antimatter-chemistry' }).public,
    astroblock: ModPack({ name: 'AstroBlock', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/astroblock' }).public,
    blissfulbuilding: ModPack({ name: 'Blissful Building', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/blissful-building' }).public,
    chaoticprogression: ModPack({ name: 'Chaotic Progression', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/chaotic-progression' }).public,
    chromatechnology: ModPack({ name: 'Chroma Technology', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/chroma-technology' }).public,
    compactclaustrophobia: ModPack({ name: 'Compact Claustrophobia', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/compact-claustrophobia' }).public,
    damageinc: ModPack({ name: 'Damage Inc', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/damage-inc-expert' }).public,
    ddss: ModPack({ name: 'Dungeons, Dragons and Space Shuttles', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/dungeons-dragons-and-space-shuttles' }).public,
    dimensionzero: ModPack({ name: 'Dimension Zero', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/dimension-zero' }).public,
    disunitysky: ModPack({ name: 'Disunity Skyblock', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/disunity-skyblock' }).public,
    dw20: ModPack({ name: 'DireWolf20', launcher: 'FTB App', link: 'https://feed-the-beast.com/modpack/ftb_presents_direwolf20_1_16' }).public,
    engineerslife: ModPack({ name: 'Engineer\'s Life', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/engineers-life' }).public,
    engineerslife2: ModPack({ name: 'Engineer\'s Life 2', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/engineers-life-2' }).public,
    enigmatica2: ModPack({ name: 'Enigmatica 2', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/enigmatica2' }).public,
    enigmatica2ex: ModPack({ name: 'Enigmatica 2: Expert', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/enigmatica2expert' }).public,
    enigmatica2skyex: ModPack({ name: 'Enigmatica 2 Skyblock: Expert', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/enigmatica2expertskyblock' }).public,
    enigmatica4: ModPack({ name: 'Enigmatica 4', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/enigmatica4' }).public,
    enigmatica6: ModPack({ name: 'Enigmatica 6', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/enigmatica6' }).public,
    equivalentskies: ModPack({ name: 'Equivalent Skies', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/equivalent-skies' }).public,
    error404: ModPack({ name: 'Error404', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/error-404-survival-not-found' }).open_beta,
    ftbacademy: ModPack({ name: 'FTB Academy', launcher: 'FTB App', link: 'https://feed-the-beast.com/modpack/ftb_academy' }).public,
    ftbinteractions: ModPack({ name: 'FTB Interactions', launcher: 'FTB App', link: 'https://www.feed-the-beast.com/modpack/ftb_interactions' }).public,
    ftbskyodyssey: ModPack({ name: 'FTB Sky Odyssey', launcher: 'FTB App', link: 'https://www.feed-the-beast.com/projects/ftb-sky-odyssey' }).public,
    glacialawakening: ModPack({ name: 'Glacial Awakening', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/glacial-awakening' }).public,
    infinevo: ModPack({ name: 'FTB Infinity Evolved', launcher: 'FTB App', link: 'https://feed-the-beast.com/modpack/ftb_infinity_evolved_1_7' }).public,
    infinevo_expert: ModPack({ name: 'FTB Infinity Evolved Expert', launcher: 'FTB App', link: 'https://feed-the-beast.com/modpack/ftb_infinity_evolved_1_7' }).public,
    immersive_revolution: ModPack({ name: 'Immersive Revolution', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/immersive-revolution' }).public,
    levitated: ModPack({ name: 'Levitated', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/levitated' }).public,
    madpack4: ModPack({ name: 'Madpack 4', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/madpack-4/' }).public,
    mceternal: ModPack({ name: 'MCEternal', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/minecraft-eternal' }).public,
    multiblockmadness: ModPack({ name: 'Multiblock Madness', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/multiblock-madness' }).public,
    omnifactory: ModPack({ name: 'Omnifactory', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/omnifactory' }).public,
    po3normal: ModPack({ name: 'Project Ozone 3 Normal', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/project-ozone-3-a-new-way-forward' }).public,
    po3titan: ModPack({ name: 'Project Ozone 3 Titan', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/project-ozone-3-a-new-way-forward' }).public,
    po3kappa: ModPack({ name: 'Project Ozone 3 Kappa', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/project-ozone-3-a-new-way-forward' }).public,
    questingmayhem: ModPack({ name: 'Questing Mayhem', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/questing-mayhem' }).public,
    rad: ModPack({ name: 'Roguelike Adventures and Dungeons', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/roguelike-adventures-and-dungeons' }).public,
    ragnamodv: ModPack({ name: 'Ragnamod V', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/ragnamod-v' }).public,
    rlcraft: ModPack({ name: 'RLCraft', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/rlcraft' }).public,
    rusticwaters: ModPack({ name: 'SeaBlock: Rustic Waters', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/seablock-rustic-waters' }).public,
    sf4: ModPack({ name: 'Sky Factory 4', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/skyfactory-4' }).public,
    skybees: ModPack({ name: 'Sky Bees', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/sky-bees' }).public,
    skyofdiamonds: ModPack({ name: 'Awakening: Sky of Diamonds', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/awakening-sky-of-diamonds' }).public,
    skyopolis: ModPack({ name: 'Skyopolis', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/skyopolis' }).public,
    skyopolis2: ModPack({ name: 'Skyopolis 2', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/skyopolis-2' }).public,
    skyopolis3: ModPack({ name: 'Skyopolis 3', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/skyopolis-3' }).public,
    skyopolis4: ModPack({ name: 'Skyopolis 4', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/skyopolis-4' }).public,
    skyworkshop: ModPack({ name: 'SkyWorkshop', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/skyworkshop' }).public,
    stacia_expert: ModPack({ name: 'Stacia Expert', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/stacia-expert' }).public,
    starfactory: ModPack({ name: 'Star Factory', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/star-factory' }).public,
    stoneblock1: ModPack({ name: 'StoneBlock 1', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/stoneblock' }).public,
    stoneblock2: ModPack({ name: 'StoneBlock 2', launcher: 'FTB App', link: 'https://feed-the-beast.com/modpack/ftb_presents_stoneblock_2' }).public,
    towncraft: ModPack({ name: 'TownCraft', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/towncraft' }).public,
    trillionaire: ModPack({ name: 'Minecraft Trillionaire', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/minecraft-trillionaire' }).public,
    volcanoblock: ModPack({ name: 'Volcano Block', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/volcano-block' }).public,
    vaulthunters: ModPack({ name: 'Vault Hunters', launcher: 'CurseForge', link: 'https://www.curseforge.com/minecraft/modpacks/vault-hunters-official-modpack' }).public,

    // Non-Modded
    vanilla: 'This is Vanilla Minecraft. (Ask a Mod/Broadcaster about the version)',
    vanillaplus: 'This is Vanilla Minecraft with a few minor mods added for convenience. (Ask a Mod/Broadcaster about the version)',
    none: 'There is currently no modpack being played, right now.'
};