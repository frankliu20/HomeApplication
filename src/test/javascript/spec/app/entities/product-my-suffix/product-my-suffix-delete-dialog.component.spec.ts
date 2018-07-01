/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { HomeApplicationTestModule } from '../../../test.module';
import { ProductMySuffixDeleteDialogComponent } from 'app/entities/product-my-suffix/product-my-suffix-delete-dialog.component';
import { ProductMySuffixService } from 'app/entities/product-my-suffix/product-my-suffix.service';

describe('Component Tests', () => {
    describe('ProductMySuffix Management Delete Component', () => {
        let comp: ProductMySuffixDeleteDialogComponent;
        let fixture: ComponentFixture<ProductMySuffixDeleteDialogComponent>;
        let service: ProductMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HomeApplicationTestModule],
                declarations: [ProductMySuffixDeleteDialogComponent]
            })
                .overrideTemplate(ProductMySuffixDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(ProductMySuffixDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ProductMySuffixService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it(
                'Should call delete service on confirmDelete',
                inject(
                    [],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });
});
