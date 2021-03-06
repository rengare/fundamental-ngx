import { Component, DebugElement, ElementRef, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MegaMenuSubitemDirective } from './mega-menu-subitem.directive';

@Component({
    template: `
        <h3 #directiveElement fd-mega-menu-subitem>Fd test</h3>
    `
})

export class TestComponent {
    @ViewChild('directiveElement', { static: false })
    ref: ElementRef;
}

describe('MegaMenuLinkDirective', () => {

    let component: TestComponent,
        fixture: ComponentFixture<TestComponent>,
        debugElement: DebugElement,
        element: HTMLElement;

    let directive, directiveInstance;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MegaMenuSubitemDirective, TestComponent]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        element = debugElement.nativeElement;
        directive = debugElement.query(By.directive(MegaMenuSubitemDirective));
        directiveInstance = directive.injector.get(MegaMenuSubitemDirective);
        fixture.detectChanges();
    });

    it('should create an instance', () => {
        expect(directive).toBeTruthy();
    });

    it('should add class', () => {
        expect(component.ref.nativeElement.className).toBe('fd-mega-menu__subitem');
    });
});
