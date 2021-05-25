import chalk from 'chalk';
import { ChannelManager } from '../utils/ChannelManager.js';
import { DeathsManager } from '../utils/DeathsManager.js';
import { MoSManager } from '../utils/MoSManager.js';
import { ToolsManager } from '../utils/ToolsManager.js';
import { CooldownManager } from '../utils/CooldownManager.js';
import { TimerManager, TimerRunner } from '../utils/TimerManager.js';
import { HeartsManager } from '../utils/HeartsManager.js';
import { HandlerManager } from '../utils/HandlerManager.js';

export default async function (chatClient, apiClient, auth) {
    console.log(chalk.cyan.bold(`===> ${chalk.green.bold('READY!')} <===`));

    const nonTurboColors = {
        colorList: ['blue', 'blueviolet', 'cadetblue', 'chocolate', 'coral', 'dodgerblue', 'firebrick', 'goldenrod', 'green', 'hotpink', 'orangered', 'red', 'seagreen', 'springgreen', 'yellowgreen'],
        random() {
            return this.colorList[Math.floor((Math.random() * this.colorList.length))];
        }
    };

    setInterval(function () {
        chatClient.changeColor(nonTurboColors.random());
    }, 1000 * 2);

    ChannelManager.import(chatClient);
    DeathsManager.import();
    MoSManager.import();
    ToolsManager.import();
    CooldownManager.import();
    TimerManager.import();
    HeartsManager.import();
    HandlerManager.import();

    for (const x in TimerRunner) {
        for (const y in TimerRunner[x]) {
            await TimerRunner[x][y](chatClient, apiClient);
        }
    }

    setInterval(async () => {
        auth.refresh();
    }, 1000 * 60 * 3);
}
