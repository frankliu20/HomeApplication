/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { HomeApplicationTestModule } from '../../../test.module';
import { ProductMySuffixUpdateComponent } from 'app/entities/product-my-suffix/product-my-suffix-update.component';
import { ProductMySuffixService } from 'app/entities/product-my-suffix/product-my-suffix.service';
import { ProductMySuffix } from 'app/shared/model/product-my-suffix.model';

describe('Component Tests', () => {
    describe('ProductMySuffix Management Update Component', () => {
        let comp: ProductMySuffixUpdateComponent;
        let fixture: ComponentFixture<ProductMySuffixUpdateComponent>;
        let service: ProductMySuffixService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HomeApplicationTestModule],
                declarations: [ProductMySuffixUpdateComponent]
            })
                .overrideTemplate(ProductMySuffixUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(ProductMySuffixUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ProductMySuffixService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new ProductMySuffix(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.product = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.update).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );

            it(
                'Should call create service on save for new entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new ProductMySuffix();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.product = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.create).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );
        });
    });
});
