<?php

namespace App\Listeners;

use App\Events\AuthorCreated;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class LogAuthorCreated
{
  /**
   * Create the event listener.
   *
   * @return void
   */
  public function __construct()
  {
    //
  }

  /**
   * Handle the event.
   *
   * @param  \App\Events\AuthorCreated  $event
   * @return void
   */
  public function handle(AuthorCreated $event)
  {
    //
  }
}
