import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsButton extends Schema.Component {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    Title: Attribute.String;
    link: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary', 'outline']>;
  };
}

export interface ComponentsDiscription extends Schema.Component {
  collectionName: 'components_components_discriptions';
  info: {
    displayName: 'Discription';
    icon: 'pencil';
  };
  attributes: {
    Description: Attribute.Text;
  };
}

export interface ComponentsImage extends Schema.Component {
  collectionName: 'components_components_images';
  info: {
    displayName: 'image';
    icon: 'picture';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface ComponentsIntro extends Schema.Component {
  collectionName: 'components_components_intros';
  info: {
    displayName: 'intro';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    introTitle: Attribute.String;
    introDesc: Attribute.Text;
    launchpadtitle: Attribute.String;
    keypoint1: Attribute.Text;
    keypoint2: Attribute.Text;
    bgtitle: Attribute.String;
    launchpaddesc: Attribute.RichText;
    LPtitle: Attribute.String;
    LPsubtitle: Attribute.String;
    point1: Attribute.String;
    point2: Attribute.String;
    point3: Attribute.String;
    point4: Attribute.String;
    point5: Attribute.String;
    point6: Attribute.String;
    benefittitle: Attribute.String;
    accgrowth: Attribute.String;
    accpoint: Attribute.String;
    accexpert: Attribute.String;
    accexpertpoint: Attribute.String;
    fundingopp: Attribute.String;
    fundingopppont: Attribute.String;
    validfeed: Attribute.String;
    validfeedpoint: Attribute.String;
    network: Attribute.String;
    networkpoint: Attribute.String;
    successstory: Attribute.String;
    successpoint1: Attribute.String;
    successpoint2: Attribute.String;
    storydesc: Attribute.Text;
    ratingnumber: Attribute.String;
    storyname: Attribute.String;
    storyrole: Attribute.String;
    storydesc2: Attribute.Text;
    ratingnumber2: Attribute.String;
    storyname2: Attribute.String;
    storyrole2: Attribute.String;
    keycomponenttitle: Attribute.String;
    appprocess: Attribute.String;
    curriculum: Attribute.String;
    apptext: Attribute.String;
    curriculumtext: Attribute.String;
    mentorship: Attribute.String;
    mentortext: Attribute.String;
    funding: Attribute.String;
    fundingtext: Attribute.String;
    demo: Attribute.String;
    demotext: Attribute.String;
    tips: Attribute.String;
    research: Attribute.String;
    researchtext: Attribute.String;
    networkactively: Attribute.String;
    nettext: Attribute.String;
    beopen: Attribute.String;
    beopentext: Attribute.String;
    makemost: Attribute.String;
    makemosttext: Attribute.String;
    conclusion: Attribute.String;
    conclusiontext1: Attribute.String;
    conclusiontext2: Attribute.String;
    conclusiontext3: Attribute.String;
    launchpaddesc1: Attribute.Text;
    launchpaddesc2: Attribute.Text;
    launchpaddesc3: Attribute.Text;
  };
}

export interface ComponentsStaking extends Schema.Component {
  collectionName: 'components_components_stakings';
  info: {
    displayName: 'staking';
    icon: 'stack';
    description: '';
  };
  attributes: {
    stakingtitle: Attribute.String;
    stakedesc: Attribute.Text;
    stakefeatures: Attribute.String;
    stakerewards: Attribute.String;
    stakerewardtext: Attribute.Text;
    stakemechanisam: Attribute.String;
    stakemechtext: Attribute.Text;
    enhancedengagement: Attribute.String;
    enhancetext: Attribute.Text;
    communitybinding: Attribute.String;
    communitytext: Attribute.Text;
    stakelist: Attribute.String;
    stakelist2: Attribute.String;
    unstake: Attribute.String;
    unstaketext: Attribute.Text;
    unstakedesc: Attribute.String;
    unstakedesctext: Attribute.Text;
    UserUnderstanding: Attribute.String;
    UserUnderstandingtext: Attribute.Text;
    Flexibility: Attribute.String;
    Flexibilitytext: Attribute.Text;
    Liquidity: Attribute.String;
    Liquiditytext: Attribute.Text;
    nolock: Attribute.String;
    nolocktext: Attribute.Text;
    usercentic: Attribute.String;
    usercentictext: Attribute.Text;
    unstakelist: Attribute.Text;
    unstakelist2: Attribute.Text;
    withdraw: Attribute.String;
    withdrawdesc: Attribute.Text;
    withdrawuser: Attribute.String;
    withdrawusertext: Attribute.Text;
    withdrawtypes: Attribute.String;
    InstantWithdrawal: Attribute.String;
    InstantWithdrawaltext: Attribute.Text;
    FlexibleWithdrawal: Attribute.String;
    FlexibleWithdrawaltext: Attribute.Text;
    SecureWithdrawl: Attribute.String;
    Securewithdrawltext: Attribute.Text;
    LowTransaction: Attribute.String;
    LowTransactiontext: Attribute.Text;
    MultipleWithdrawal: Attribute.String;
    MultipleWithdrawaltext: Attribute.Text;
    WithdrawalAvail: Attribute.String;
    WithdrawalAvailtext: Attribute.Text;
    TransparentWithdrawal: Attribute.String;
    TransparentWithdrawaltxt: Attribute.Text;
    WithdrawalConfirm: Attribute.String;
    WithdrawalConfirmtxt: Attribute.Text;
    Withdrawallist: Attribute.Text;
    Withdrawallist2: Attribute.Text;
    rewards: Attribute.RichText;
  };
}

export interface ComponentsSubtitle extends Schema.Component {
  collectionName: 'components_components_subtitles';
  info: {
    displayName: 'Subtitle';
    icon: 'file';
  };
  attributes: {
    subtitle: Attribute.String;
  };
}

export interface ComponentsTitle extends Schema.Component {
  collectionName: 'components_components_titles';
  info: {
    displayName: 'Title';
    icon: 'strikeThrough';
  };
  attributes: {
    Title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.button': ComponentsButton;
      'components.discription': ComponentsDiscription;
      'components.image': ComponentsImage;
      'components.intro': ComponentsIntro;
      'components.staking': ComponentsStaking;
      'components.subtitle': ComponentsSubtitle;
      'components.title': ComponentsTitle;
    }
  }
}
