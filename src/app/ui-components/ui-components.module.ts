import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TabsModule, DatepickerModule, ButtonsModule, AccordionModule } from 'ng2-bootstrap';

import { AppModule } from '../app.module';
import { ContentBlockModule } from 'crds-ng2-content-block';

import { ExampleModule } from '../shared/example/example.module';
import { JumbotronModule } from '../shared/jumbotron/jumbotron.module';

<<<<<<< HEAD
/* typography */
import { TypographyComponent } from './typography/typography.component';
import { TypefacesComponent } from './typography/typefaces/typefaces.component';
import { FontScalingComponent } from './typography/font-scaling/font-scaling.component';
import { TypesettingComponent } from './typography/typesetting/typesetting.component';
import { AddressComponent } from './typography/address/address.component';
import { TypographyJumbotronComponent } from './typography/jumbotron/jumbotron.component';
import { BlockquoteComponent } from './typography/blockquote/blockquote.component';
import { ListsComponent } from './typography/lists/lists.component';
import { WebFontsComponent } from './typography/web-fonts/web-fonts.component';

/* colors */
import { ColorsComponent } from './colors/colors.component';
import { SwatchesComponent } from './colors/swatches/swatches.component';
import { ColorOverridesComponent } from './colors/overrides/overrides.component';
import { ColorBackgroundsComponent } from './colors/backgrounds/backgrounds.component';
import { ColorTextComponent } from './colors/text/text.component';

/* utility classes */
import { UtilitiesComponent } from './utilities/utilities.component';
import { UtilitiesJumbotronComponent } from './utilities/jumbotron/jumbotron.component';
import { BordersComponent } from './utilities/borders/borders.component';
import { CornersComponent } from './utilities/corners/corners.component';
import { DisplayComponent } from './utilities/display/display.component';
import { ImagesComponent } from './utilities/images/images.component';
import { MarginComponent } from './utilities/margin/margin.component';
import { PaddingComponent } from './utilities/padding/padding.component';
import { TextComponent } from './utilities/text/text.component';
import { ButtonUtilitiesComponent } from './utilities/buttons/buttons.component';
import { VerticalPositioningComponent } from './utilities/vertical-positioning/vertical-positioning.component';

/* feedback */
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackJumbotronComponent } from './feedback/jumbotron/jumbotron.component';
import { AlertsComponent } from './feedback/alerts/alerts.component';
import { ToastNotificationsComponent } from './feedback/toast-notifications/toast-notifications.component';

/* loaders */
import { LoadersComponent } from './loaders/loaders.component';

/* buttons */
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonsJumbotronComponent } from './buttons/jumbotron/jumbotron.component';
import { ButtonStylesComponent } from './buttons/styles/styles.component';
import { ButtonSizesComponent } from './buttons/sizes/sizes.component';
import { ButtonGroupsComponent } from './buttons/groups/groups.component';

/* icons */
import { IconsComponent } from './icons/icons.component';
import { IconDirectoryComponent } from './icons/directory/directory.component';
import { IconInlineComponent } from './icons/inline-svg/inline-svg.component';
import { IconCssComponent } from './icons/css-svg/css-svg.component';
import { IconResizeComponent } from './icons/resize-svg/resize-svg.component';
import { IconColorsComponent } from './icons/colors/colors.component';

/* tables */
import { TablesComponent } from './tables/tables.component';
import { TablesJumbotronComponent } from './tables/jumbotron/jumbotron.component';

/* forms */
import { FormsComponent } from './forms/forms.component';
import { FormsJumbotronComponent } from './forms/jumbotron/jumbotron.component';
import { FormControlsComponent } from './forms/controls/form-controls.component';
import { FormStatesComponent } from './forms/states/form-states.component';
import { FormDatepickerComponent } from './forms/datepicker/datepicker.component';
import { FormTimepickerComponent } from './forms/timepicker/timepicker.component';
import { SearchFieldComponent } from './forms/search/search.component';
import { FormGroupsComponent } from './forms/groups/groups.component';

/* labels */
import { LabelsComponent } from './labels/labels.component';

/* sign-in */
import { SignInComponent } from './sign-in/sign-in.component';

/* avatar groups */
import { AvatarGroupsComponent } from './avatar-groups/avatar-groups.component';

/* media objects */
import { MediaObjectsComponent } from './media-objects/media-objects.component';

/* cards */
import { CardsComponent } from './cards/cards.component';
import { CardsTypesComponent } from './cards/types/types.component';
import { CardsGridLayoutComponent } from './cards/grid-layout/grid-layout.component';
import { CardsDecksComponent } from './cards/card-decks/card-decks.component';

/* countdown */
import { CountdownComponent } from './countdown/countdown.component';

/* media images */
import { MediaImgComponent } from './media-img/media-img.component';

/* jumbotrons */
import { JumbotronsComponent } from './jumbotrons/jumbotrons.component';

/* modals */
import { VideoModalsComponent } from './video-modals/video-modals.component';

/* fauxdals */
import { FauxdalsComponent } from './fauxdals/fauxdals.component';

/* accordions */
import { AccordionComponent } from './accordion/accordion.component';
=======
import { CoreModule } from './core/core.module';
import { AtomsModule } from './atoms/atoms.module';
import { MoleculesModule } from './molecules/molecules.module';
>>>>>>> development

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TabsModule,
    DatepickerModule.forRoot(),
    ButtonsModule.forRoot(),
    AccordionModule.forRoot(),
    ExampleModule,
    JumbotronModule,
    ContentBlockModule,
    CoreModule,
    AtomsModule,
    MoleculesModule
  ],
  exports: [],
  declarations: []
})
export class UiComponentsModule { }
