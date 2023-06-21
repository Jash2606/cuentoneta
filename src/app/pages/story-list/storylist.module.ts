import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoryListRoutingModule } from './story-list-routing.module';
import { StoryListComponent } from './story-list.component';
import { StorylistCardDeckComponent } from '../../components/story-list-card-deck/storylist-card-deck.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [StoryListComponent],
  imports: [
    CommonModule,
    StoryListRoutingModule,
    StorylistCardDeckComponent,
    NgxSkeletonLoaderModule,
  ],
})
export class StorylistModule {}
