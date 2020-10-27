<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Cupom extends Model
{
  protected $fillable = [
      'title','expires_in','quantity','status'
  ];
}
