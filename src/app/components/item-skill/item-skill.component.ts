import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-skill',
  templateUrl: './item-skill.component.html',
  styleUrls: ['./item-skill.component.css']
})
export class ItemSkillComponent implements OnInit {
  @Input() color!: string;
  @Input() num!: string;
  @Input() texto!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
