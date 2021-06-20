<template>
  <div>
    <!-- 会员等级ID{{$route.params.id}} -->
    会员等级ID{{id}}
  </div>
</template>

<script>
  export default{
    props:['id'],
    name:"MemberLevel"
  }
</script>

<style>
</style>
