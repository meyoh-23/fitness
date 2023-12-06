export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContacUs = "contactus"
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}