import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  imports: [],
  templateUrl: './paginator.html',
  styleUrl: './paginator.scss',
})
export class Paginator {

  currentPage: number = 1;
  totalPages: any[] = [];
  itemsPerPage: number = 15;
  @Input()
  set totalPagesNum(value: number) {
    this.totalPages = Array.from({ length: value }, (_, index) => index + 1);
  }
  @Output() callData: EventEmitter<number> = new EventEmitter<number>();
  increaseCurrentPage() {
    if (this.currentPage < this.totalPages.length) {
      this.currentPage++;
this.callData.emit(this.currentPage);
}
}
decreaseCurrentPage() {
  if (this.currentPage > 1) {
    this.currentPage--;
    this.callData.emit(this.currentPage);
    }
  }
  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages.length) {
      this.currentPage = page;
      this.callData.emit(page);
    }
  }

}
