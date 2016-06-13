// Copyright (c) 2016 Tracktunes Inc

import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';
import {
    AppState,
    LastPageVisited
} from '../../providers/app-state/app-state';

export const APP_VERSION: string = '0.0.7-alpha.44';

/**
 * @name AboutPage
 * @description
 * A modal About page that displays the version number of this program
 * among other info.
 */
@Component({
    templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
    private menuController: MenuController;
    private appState: AppState;

    /**
     * AboutPage modal constructor
     */
    constructor(menuController: MenuController, appState: AppState) {
        console.log('constructor():AboutPage');
        this.menuController = menuController;
        this.appState = appState;
    }

    /**
     * https://webcake.co/page-lifecycle-hooks-in-ionic-2/
     * @returns {void}
     */
    public ionViewDidEnter(): void {
        // the left menu should be disabled on the tutorial page
        this.menuController.enable(false);

        // update app state's last viewed folder
        this.appState.updateProperty(
            'lastPageVisited',
            LastPageVisited.About
        ).subscribe();
    }

    /**
     * UI callback handling cancellation of this modal
     * @returns {void}
     */
    public onClickCancel(): void {
        console.log('onClickCancel()');
    }

    public ionViewDidLeave(): void {
        // enable the left menu when leaving the tutorial page
        this.menuController.enable(true);
    }

}
