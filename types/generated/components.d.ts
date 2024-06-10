import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsApplyivos extends Schema.Component {
  collectionName: 'components_components_applyivos';
  info: {
    displayName: 'applyivos';
    description: '';
  };
  attributes: {
    ApplyIVO: Attribute.String;
    ApplyIVOdesc: Attribute.String;
    StepsApply: Attribute.String;
    ResearchIVO: Attribute.String;
    ResearchIVO1: Attribute.String;
    ResearchIVO2: Attribute.String;
    PrepareYour: Attribute.String;
    PrepareYour1: Attribute.String;
    PrepareYour2: Attribute.String;
    PrepareYour3: Attribute.String;
    PrepareYour4: Attribute.String;
    StakingFinancial: Attribute.String;
    StakingFinancial1: Attribute.String;
    StakingFinancial2: Attribute.String;
    SubmitApplication: Attribute.String;
    SubmitApplication1: Attribute.String;
    SubmitApplication2: Attribute.String;
    SubmitApplication3: Attribute.String;
    FollowUp: Attribute.String;
    FollowUp1: Attribute.String;
    FollowUp2: Attribute.String;
    TipsSuccessful: Attribute.String;
    TipsSuccessful1: Attribute.String;
    TipsSuccessful2: Attribute.String;
    TipsSuccessful3: Attribute.String;
    TipsSuccessful4: Attribute.String;
    ExampleApplication: Attribute.String;
    PersonalInformation: Attribute.String;
    Personalname: Attribute.String;
    Personalcontact: Attribute.String;
    ProfessionalBackground: Attribute.String;
    Summary: Attribute.String;
    Experience: Attribute.String;
    TechnicalExpertise: Attribute.String;
    Skills: Attribute.String;
    TechnicalProjects: Attribute.String;
    CommunityContribution: Attribute.String;
    Involvement: Attribute.String;
    Contributions: Attribute.String;
    StakingCommitment: Attribute.String;
    Conclusion: Attribute.String;
    conclusionSummary: Attribute.String;
    selectERC20token: Attribute.String;
    ercdesc: Attribute.String;
    ProjectName: Attribute.String;
    ProjectName1: Attribute.String;
    ProjectName2: Attribute.String;
    ListingInformation: Attribute.String;
    ListingInformation1: Attribute.String;
    TokenInformation: Attribute.String;
    TokenImage: Attribute.String;
    BannerImage: Attribute.String;
    TokenContract: Attribute.String;
    TokenSymbol: Attribute.String;
    TokenDetails: Attribute.String;
    TeamSection: Attribute.String;
    CastandCrew: Attribute.String;
    CastandCrewname: Attribute.String;
    CastandCrewrole: Attribute.String;
    CastandCrewbio: Attribute.String;
    CastandCrewsmm: Attribute.String;
    insta: Attribute.String;
    fb: Attribute.String;
    twitter: Attribute.String;
    TokenSaleInformation: Attribute.String;
    TokenPrice: Attribute.String;
    PrivateSale: Attribute.String;
    PublicSale: Attribute.String;
    ClaimSlots: Attribute.String;
    ClaimSlots1: Attribute.String;
    VestingTime: Attribute.String;
    VestingTime1: Attribute.String;
  };
}

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

export interface ComponentsDaos extends Schema.Component {
  collectionName: 'components_components_daos';
  info: {
    displayName: 'daos';
    icon: 'feather';
    description: '';
  };
  attributes: {
    WhatDAOs: Attribute.String;
    daodesc: Attribute.Text;
    KeyFeaturesDAOs: Attribute.String;
    Decentralization: Attribute.String;
    Decentralizationtxt: Attribute.String;
    Autonomy: Attribute.String;
    Autonomytxt: Attribute.String;
    Transparency: Attribute.String;
    Transparencytxt: Attribute.String;
    SmartContracts: Attribute.String;
    SmartContracts1: Attribute.String;
    SmartContracts2: Attribute.String;
    TokenEnthusiasts: Attribute.String;
    TokenEnthusiaststxt: Attribute.String;
    ProposalListing: Attribute.String;
    ProposalListingdesc: Attribute.Text;
    ProposalListing1: Attribute.Text;
    ProposalListing2: Attribute.String;
    ProposalListing3: Attribute.String;
    ProposalListing4: Attribute.Text;
    Benefitsofdaos: Attribute.String;
    TrustlessCollaboration: Attribute.String;
    TrustlessCollaborationtxt: Attribute.String;
    GlobalParticipation: Attribute.String;
    GlobalParticipationtxt: Attribute.String;
    ReducedOperational: Attribute.String;
    ReducedOperationaltxt: Attribute.Text;
    EnhancedSecurity: Attribute.String;
    EnhancedSecuritytxt: Attribute.String;
    ChallengesDAOs: Attribute.String;
    LegalRegulatory: Attribute.String;
    LegalRegulatorytxt: Attribute.Text;
    CodeVulnerability: Attribute.String;
    CodeVulnerabilitytxt: Attribute.Text;
    Governance: Attribute.String;
    Governancetxt: Attribute.String;
    ChallengesDAOsdesc: Attribute.Text;
    ProposalCreation: Attribute.String;
    ProposalCreationdesc: Attribute.Text;
    UserUnderstanding: Attribute.String;
    Ourplatform: Attribute.String;
    ProposalCreators: Attribute.String;
    ProposalCreatorstxt: Attribute.Text;
    ProposalVoters: Attribute.String;
    ProposalVoterstxt: Attribute.String;
    VotingMechanism: Attribute.String;
    VotingMechanism1: Attribute.String;
    VotingMechanism2: Attribute.String;
    VotingMechanism3: Attribute.String;
    VotingMechanism4: Attribute.String;
    AutoAcceptance: Attribute.String;
    AutoAcceptance1: Attribute.String;
    AutoAcceptance2: Attribute.String;
    AutoAcceptance3: Attribute.String;
    AutoAcceptance4: Attribute.String;
    proposalsummary: Attribute.String;
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

export interface ComponentsProjects extends Schema.Component {
  collectionName: 'components_components_projects';
  info: {
    displayName: 'projects';
    icon: 'grid';
    description: '';
  };
  attributes: {
    Tokenization: Attribute.String;
    ProjectName: Attribute.String;
    ProjectName1: Attribute.String;
    ProjectName2: Attribute.String;
    Listing: Attribute.String;
    ListingTime: Attribute.String;
    TokenInformation: Attribute.String;
    TokenInformation1: Attribute.String;
    TokenInformation2: Attribute.String;
    TokenInformation3: Attribute.String;
    TokenInformation4: Attribute.String;
    TokenInformation5: Attribute.String;
    TeamSection: Attribute.String;
    CastCrew: Attribute.String;
    CastCrew1: Attribute.String;
    CastCrew2: Attribute.String;
    CastCrew3: Attribute.String;
    CastCrew4: Attribute.String;
    CastCrew5: Attribute.String;
    CastCrew6: Attribute.String;
    CastCrew7: Attribute.String;
    TokenSale: Attribute.String;
    TokenPrice: Attribute.String;
    TokenPrice1: Attribute.String;
    TokenPrice2: Attribute.String;
    ClaimSlots: Attribute.String;
    ClaimSlotstxt: Attribute.String;
    vestingtime: Attribute.String;
    vestingtimetxt: Attribute.String;
    SaleRounds: Attribute.String;
    Round1: Attribute.String;
    Round1starttime: Attribute.String;
    Round1endtime: Attribute.String;
    Round2: Attribute.String;
    Round2starttime: Attribute.String;
    Round2endtime: Attribute.String;
    Membership: Attribute.String;
    TieredMembership: Attribute.String;
    TieredMembershiptxt: Attribute.String;
    RewardsIncentives: Attribute.String;
    RewardsIncentives1: Attribute.String;
    RewardsIncentives2: Attribute.String;
    RewardsIncentives3: Attribute.String;
    GovernanceParticipation: Attribute.String;
    GovernanceParticipation1: Attribute.String;
    GovernanceParticipation2: Attribute.String;
    RecognitionPrestige: Attribute.String;
    RecognitionPrestige1: Attribute.String;
    RecognitionPrestige2: Attribute.String;
    SupportNetworking: Attribute.String;
    SupportNetworking1: Attribute.String;
    SupportNetworking2: Attribute.String;
    EarlyAccess: Attribute.String;
    EarlyAccess1: Attribute.String;
    EarlyAccess2: Attribute.String;
    ContributionRecognition: Attribute.String;
    ContributionRecognition1: Attribute.String;
    ContributionRecognition2: Attribute.String;
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
    Rewards: Attribute.String;
    rewarddesc: Attribute.Text;
    StakingRewards: Attribute.String;
    StakingRewardstext: Attribute.Text;
    miningrewards: Attribute.String;
    miningrewardstext: Attribute.Text;
    ParticipationRewards: Attribute.String;
    ParticipationRewardstxt: Attribute.Text;
    ReferralRewards: Attribute.String;
    ReferralRewardstxt: Attribute.Text;
    DeveloperRewards: Attribute.String;
    DeveloperRewardstext: Attribute.Text;
    UserOwnership: Attribute.String;
    UserOwnershiptxt: Attribute.Text;
    Interoperability: Attribute.String;
    Interoperabilitytxt: Attribute.Text;
    SecurityPrivacy: Attribute.String;
    SecurityPrivacytxt: Attribute.Text;
    CommunityGovernance: Attribute.String;
    CommunityGovernancetxt: Attribute.Text;
    rewardslist: Attribute.Text;
    rewardslist2: Attribute.Text;
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

export interface ComponentsTier extends Schema.Component {
  collectionName: 'components_components_tiers';
  info: {
    displayName: 'tier';
    icon: 'star';
    description: '';
  };
  attributes: {
    Tiers: Attribute.String;
    BronzeTier: Attribute.String;
    BronzeTierbadge: Attribute.String;
    Bronzedesc: Attribute.String;
    BronzTierPurpose: Attribute.String;
    BronzTierPurposetxt: Attribute.Text;
    StructureLevels: Attribute.String;
    StructureLevelstxt: Attribute.Text;
    CriteriaAdvancement: Attribute.String;
    CriteriaAdvancementtxt: Attribute.Text;
    SilverTier: Attribute.String;
    silvertierbadge: Attribute.String;
    SilverTierdesc: Attribute.Text;
    CriteriaSilverTier: Attribute.String;
    CriteriaSilverTierlist1: Attribute.String;
    CriteriaSilverTierlist2: Attribute.String;
    CriteriaSilverTierlist3: Attribute.String;
    SilverBenefits: Attribute.String;
    SilverBenefits1: Attribute.String;
    SilverBenefits2: Attribute.String;
    SilverBenefits3: Attribute.String;
    SilverBenefits4: Attribute.String;
    SilverBenefits5: Attribute.String;
    SilverBenefits6: Attribute.String;
    EngagementOpportunities: Attribute.String;
    EngagementOpportunities1: Attribute.String;
    EngagementOpportunities2: Attribute.String;
    PathHigherTiers: Attribute.String;
    PathHigherTiersdesc: Attribute.String;
    GoldTier: Attribute.String;
    GoldTierbadge: Attribute.String;
    Positiongold: Attribute.String;
    PositionGoldtxt: Attribute.String;
    CriteriaGold: Attribute.String;
    CriteriaGoldlist1: Attribute.String;
    CriteriaGoldlist2: Attribute.String;
    CriteriaGoldlist3: Attribute.String;
    GoldBenefits: Attribute.String;
    GoldBenefits1: Attribute.String;
    GoldBenefits2: Attribute.String;
    GoldBenefits3: Attribute.String;
    GoldBenefits4: Attribute.String;
    GoldBenefits5: Attribute.String;
    GoldBenefits6: Attribute.String;
    GoldBenefits7: Attribute.String;
    GoldEngagementOpportunities: Attribute.String;
    GoldEngagementtxt: Attribute.String;
    GoldPath: Attribute.String;
    GoldPathtxt: Attribute.String;
    PlatinumTier: Attribute.String;
    PlatinumTierbadge: Attribute.String;
    PlatinumTierdesc: Attribute.Text;
    positionPlatinumTier: Attribute.String;
    PositionPlatinumTiertxt: Attribute.String;
    CriteriaPlatinum: Attribute.String;
    CriteriaPlatinumlist1: Attribute.String;
    CriteriaPlatinumlist2: Attribute.String;
    CriteriaPlatinumlist3: Attribute.String;
    PlatinumBenefits: Attribute.String;
    PlatinumBenefits1: Attribute.Text;
    PlatinumBenefits2: Attribute.Text;
    PlatinumBenefits3: Attribute.Text;
    PlatinumBenefits4: Attribute.Text;
    PlatinumBenefits5: Attribute.Text;
    PlatinumBenefits6: Attribute.Text;
    PlatinumBenefits7: Attribute.Text;
    PlatinumBenefits8: Attribute.Text;
    platinumengagement: Attribute.String;
    platinumengagement1: Attribute.Text;
    platinumengagement2: Attribute.Text;
    PathDiamondTier: Attribute.String;
    PathDiamondTiertxt: Attribute.Text;
    DiamondTier: Attribute.String;
    DiamondTierbadge: Attribute.String;
    DiamondTierdesc: Attribute.Text;
    PositionDiamondTier: Attribute.String;
    PositionDiamondTiertxt: Attribute.Text;
    CriteriaDiamond: Attribute.String;
    CriteriaDiamond1: Attribute.Text;
    CriteriaDiamond2: Attribute.Text;
    CriteriaDiamond3: Attribute.Text;
    Diamondbenefits: Attribute.String;
    Diamondbenefits1: Attribute.Text;
    Diamondbenefits2: Attribute.Text;
    Diamondbenefits3: Attribute.Text;
    Diamondbenefits4: Attribute.Text;
    Diamondbenefits5: Attribute.Text;
    Diamondbenefits6: Attribute.Text;
    Diamondbenefits7: Attribute.Text;
    Diamondbenefits8: Attribute.Text;
    DaimondEngagement: Attribute.String;
    DaimondEngagement1: Attribute.Text;
    DaimondEngagement2: Attribute.Text;
    BlueDiamondTier: Attribute.String;
    BlueDiamondbadge: Attribute.String;
    BlueDiamondTierdesc: Attribute.String;
    positionBluedaimond: Attribute.String;
    positionBluedaimondtxt: Attribute.String;
    CriteriaBlueDiamond: Attribute.String;
    CriteriaBlueDiamond1: Attribute.Text;
    CriteriaBlueDiamond2: Attribute.Text;
    CriteriaBlueDiamond3: Attribute.Text;
    BlueDiamondTierBenefits: Attribute.String;
    BlueDiamondBenefits1: Attribute.Text;
    BlueDiamondBenefits2: Attribute.Text;
    BlueDiamondBenefits3: Attribute.Text;
    BlueDiamondBenefits4: Attribute.Text;
    BlueDiamondBenefits5: Attribute.Text;
    BlueDiamondBenefits6: Attribute.Text;
    BlueDiamondBenefits7: Attribute.Text;
    BlueDiamondBenefits8: Attribute.Text;
    BlueDiamondEngagement: Attribute.String;
    BlueDiamondEngagement1: Attribute.Text;
    BlueDiamondEngagement2: Attribute.Text;
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
      'components.applyivos': ComponentsApplyivos;
      'components.button': ComponentsButton;
      'components.daos': ComponentsDaos;
      'components.discription': ComponentsDiscription;
      'components.image': ComponentsImage;
      'components.intro': ComponentsIntro;
      'components.projects': ComponentsProjects;
      'components.staking': ComponentsStaking;
      'components.subtitle': ComponentsSubtitle;
      'components.tier': ComponentsTier;
      'components.title': ComponentsTitle;
    }
  }
}
