import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerAndTemplateComponent } from './container-and-template.component';

describe('ContainerAndTemplateComponent', () => {
  let component: ContainerAndTemplateComponent;
  let fixture: ComponentFixture<ContainerAndTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerAndTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerAndTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
