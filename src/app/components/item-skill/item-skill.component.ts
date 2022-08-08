import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-item-skill',
  templateUrl: './item-skill.component.html',
  styleUrls: ['./item-skill.component.css']
})
export class ItemSkillComponent implements OnInit, AfterViewInit {
  @Input() color!: string;
  @Input() num!: string;
  @Input() texto!: string;
  @ViewChild('skill') mySkill!: ElementRef;
  @ViewChild('skillItem') Skill!: ElementRef;
  @ViewChild('punto') dot!: ElementRef;
  @ViewChild('circulo') circle!: ElementRef;
  @ViewChild('loading') loading!: ElementRef;
  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    window.addEventListener('scroll', ()=>{
      this.respAlScroll()
    })
    
  }
  respAlScroll(){
    if(this.mySkill.nativeElement.offsetTop - 500 < document.documentElement.scrollTop){
      console.log('llegó')
      this.circle.nativeElement.style.animation = ' on 1s linear 2.5s forwards'
      this.dot.nativeElement.style.animation = ' rotar 2s linear .5s forwards'
      this.Skill.nativeElement.style.animation = ' skill .5s linear forwards'
      this.loading.nativeElement.style.opacity = '1'
    }
  }

}
