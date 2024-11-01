import { EventData, Page, NavigatedData } from '@nativescript/core';
import { GameViewModel } from './game-view-model';

export function navigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new GameViewModel();
}