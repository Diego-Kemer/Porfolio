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
  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    console.log(this.mySkill.nativeElement.scrollTop)
  }

}
