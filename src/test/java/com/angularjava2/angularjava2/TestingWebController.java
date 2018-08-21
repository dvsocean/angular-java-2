package com.angularjava2.angularjava2;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class TestingWebController {

  private BookShelf shelf = new BookShelf();

  @Test
  public void shouldReturnBookByTitle(){
    assertEquals("Relentless", shelf.selectByTitle("Relentless").getTitle());
  }

}
