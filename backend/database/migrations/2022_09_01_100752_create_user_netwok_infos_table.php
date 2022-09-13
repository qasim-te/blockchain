<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_netwok_infos', function (Blueprint $table) {
            $table->id();
            $table->string('userWalletAddress');
            $table->bigInteger('userBlockNumber');
            $table->float('userWalletBalance');
            $table->string('userNetWork');
            $table->integer('userNetWorkId');
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
        Schema::dropIfExists('user_netwok_infos');
    }
};
