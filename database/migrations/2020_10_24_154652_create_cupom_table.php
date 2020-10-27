<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCupomTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cupoms', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title')->unique();
            $table->date('expires_in');
            $table->integer('quantity');
            $table->enum('status', ['Enable', 'Disable']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cupom');
    }
}
