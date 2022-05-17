import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { iconPack } from '../../types/icon';

import { IconComponent } from './icon.component';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;
  const firstIconInIconPack = Object.keys(iconPack)[0];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it("should have valid name", () => {
  //   component.name = firstIconInIconPack;
  //   expect(component.isNameValid).toBeTruthy();
  // });

  // it("should not have valid name", () => {
  //   component.name = "this is not a valid icon name";
  //   expect(component.isNameValid).toBeFalsy();
  // });

  // it("html should not be equal to icon name, when name is valid", () => {
  //   component.name = firstIconInIconPack;
  //   expect(component.isNameValid).toBeTruthy();
  //   expect(component.html).not.toBe(component.name);
  // });

  // it("should contain name when icon name is valid", () => {
  //   component.name = "this is not a valid icon name";
  //   expect(component.isNameValid).toBeFalsy();
  //   expect(String(component.html)).toContain("this is not a valid icon name");
  // });
});
