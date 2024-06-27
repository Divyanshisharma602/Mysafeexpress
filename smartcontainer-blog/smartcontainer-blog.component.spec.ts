import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartcontainerBlogComponent } from './smartcontainer-blog.component';

describe('SmartcontainerBlogComponent', () => {
  let component: SmartcontainerBlogComponent;
  let fixture: ComponentFixture<SmartcontainerBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartcontainerBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartcontainerBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
